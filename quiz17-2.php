<?php

$startTime = microtime(true);

$inputData = <<<EOD
Register A: 90938893795561
Register B: 0
Register C: 0
EOD;

$programInput = 'Program: 2,4,1,6,7,5,4,6,1,4,5,5,0,3,3,0';
$program = explode(',', explode('Program: ', $programInput)[1]);

$register = [];
$inputLines = array_filter(explode("\n", $inputData));
foreach ($inputLines as $line) {
    [$inst, $value] = explode(': ', $line);
    [, $reg] = explode(' ', $inst);
    $register[$reg] = intval($value);
}

$instructionPointer = 0;

function dec2bin($dec) {
    return decbin($dec);
}

function bin2dec($bin) {
    return bindec($bin);
}

function xORF($a, $b) {
    return $a ^ $b;
}

$output = [];

function comboOperand($operand) {
    switch ($operand) {
        case "0":
            return 0;
        case "1":
            return 1;
        case "2":
            return 2;
        case "3":
            return 3;
        case "4":
            return $GLOBALS['register']['A'];
        case "5":
            return $GLOBALS['register']['B'];
        case "6":
            return $GLOBALS['register']['C'];
        case "7":
            echo "7: this should never show\n";
            return null;
    }
}

function literalOperand($operand) {
    return intval($operand);
}

$instructions = [
    // "adv" 0
    function ($operand) {
        $GLOBALS['register']['A'] = intval($GLOBALS['register']['A'] / (2 ** comboOperand($operand)));
    },
    // "bxl" 1
    function ($operand) {
        $GLOBALS['register']["B"] = xORF($GLOBALS['register']["B"], literalOperand($operand));
        return $GLOBALS['register']["B"];
    },
    // "bst" 2
    function ($operand) {
        $GLOBALS['register']['B'] = comboOperand($operand) % 8;
    },
    // "jnz" 3
    function ($operand) {
        if ($GLOBALS['register']['A'] !== 0) {
            $GLOBALS['instructionPointer'] = literalOperand($operand);
        }
    },
    // "bxc" 4
    function ($operand) {
        $GLOBALS['register']['B'] = xORF($GLOBALS['register']['B'], $GLOBALS['register']['C']);
        return $GLOBALS['register']['B'];
    },
    // "out" 5
    function ($operand) {
        array_push($GLOBALS['output'], comboOperand($operand) % 8);
        return comboOperand($operand) % 8;
    },
    // "bdv" 6
    function ($operand) {
        $GLOBALS['register']['B'] = intval($GLOBALS['register']['A'] / (2 ** comboOperand($operand)));
    },
    // "cdv" 7
    function ($operand) {
        $GLOBALS['register']['C'] = intval($GLOBALS['register']['A'] / (2 ** comboOperand($operand)));
    },
];


do {
    $instruction = $program[$instructionPointer];
    $operand = $program[$instructionPointer + 1];

    $instructions[$instruction]($operand);

    if (!($instruction == '3' && $register["A"] !== 0)) {
        $instructionPointer += 2;
    }
} while ($instructionPointer + 1 < count($program));

$str = implode('', $output);
echo "Final result: $str\n";
echo "Final print: " . implode(',', $output) . "\n";

$bestA = 0;

function loop($a, $count) {
    if ($count > count($GLOBALS['program'])) {
        echo "Best A: $a\n";
        $GLOBALS['bestA'] = $a;
        return $a;
    }

    for ($i = 0; $i <= 7; $i++) {
        $localA = $a << 3 | $i;
        $GLOBALS['register']["A"] = $localA;
        $GLOBALS['register']["B"] = 0;
        $GLOBALS['register']["C"] = 0;

        $GLOBALS['instructionPointer'] = 0;
        $localProgram = array_slice($GLOBALS['program'], 0, -2);

        $GLOBALS['output'] = [];
        do {
            $instruction = $localProgram[$GLOBALS['instructionPointer']];
            $operand = $localProgram[$GLOBALS['instructionPointer'] + 1];
            $GLOBALS['instructions'][$instruction]($operand);
            $GLOBALS['instructionPointer'] += 2;
        } while ($GLOBALS['instructionPointer'] + 1 < count($localProgram));

        if ($GLOBALS['output'][0] === intval($GLOBALS['program'][count($GLOBALS['program']) - $count])) {
            loop($localA, $count + 1);
        }
    }
}

loop(0, 1);

$endTime = microtime(true);
echo "Run time: " . ($endTime - $startTime) . " seconds\n";

?>
