console.time('run:')

let mapInput = [
'##################################################',
'#..O.O.....#O..#.#O.#.....#.OO...#O#.O...##...OO.#',
'#.#....##..#....#...........O...O.....O.O...OOOOO#',
'#....#.........O...O...........OO.O..O.#........O#',
'#.O..O..OO......OO.......#.....O....O...O.#....#.#',
'#.....OO..#.O.....O...OOO.OO....O#..O.O...OO.O.O.#',
'#..O..OOOO.OO..OO..#.O#OO.O..O.OOO..O......##.#..#',
'#..OOO...O.O#.O.......OO...O......#....O..OO.....#',
'#..##OO..OOO..O.OO..#...#.O.OO..O.....O.....O....#',
'#O.O.OO.....#.O.#....OOOO#.#.....O..#..O.O..#..O.#',
'##......OO..O.#....#...O.OO.O..OO#.O....O........#',
'#.#OO.O.#.OO.O#O..O.........O...O..O#.O......#..##',
'#.#..O.O.#.......O..O..O.OO#O...O#..O.OO.....OO..#',
'#OO....O...OOOO.......OO......#OOOO.O.O..OO#..O..#',
'#......O..O.#.O....O.....O.....#..O...O.OOO....O##',
'#.....O..O....OO...O#OO..O..O.......O.#...OO..O#O#',
'#.....#OO........O...#O##..O..O.#.O.....#O....O..#',
'#O.O....#...O#OOO.......O..#...O#O.O..O....##.O.O#',
'#......O.O......O..#..O.....O......O.O#.O..#..OO.#',
'#.O....O.O...#....#...O...O.....OO.O#..O.O#.O...O#',
'#...O.O...O.#.O.O..#...O.....O......O.#.#........#',
'#O...#O....O....##.OOOO.#...O.#.##.O..O...O....O.#',
'#...O.......O..O#O.O.OO...#.....O.....#.#.OO#.#O.#',
'#.#..O....O.....O..OOO.O..O......OOO...O.OOO...OO#',
'#...#..O...#O..O..O....O@.O..O..O...O.#......O...#',
'#......OO#.OO..O..O...OO.#.OO........O.OO.O.OOO..#',
'#...OO.#....#..OO..O.O.OO#.O...OO.O.....O..O...O.#',
'#O.......O...#O..#.OO....O.#OO.....#..O.O.O#..O..#',
'#O.##O.O.O......O....O.#......#.......O...#...O..#',
'#.O.............O.#...O.OO#O...#O.......OO.#.O..O#',
'#O.##..O...O.....O.OO.OO.....O..O..O...O.#..OO...#',
'#O..O.OOOO.O..O.#.OO.O....O.#O.OOO..#.O...O....OO#',
'#............O.#.....O....#O.....#OO.....O.O.#O..#',
'##.O...#...O....#OO#..#O.O#........O.OO#O#.....#.#',
'#.OO......O.O.O......OOOO.O.O..OOO.....O.O#.#....#',
'#O.O.#O..O......OO#O..O...OO......O#O#.O.#..OOO..#',
'#O..#.O.O.#OO.O....OO......#..OOO.O...O....O.....#',
'#.......O.O......O......OO..OO#O..#..O...O..O.OO.#',
'#.#.#.O.........O..O...OO..O.O.O..OO#OO...O.O.O.O#',
'#O#..O.....#O...O.O.##O..OO..O.O..OO.O....O...OO.#',
'#.O.O...O.O.#.O....OOO.O.#OO#O.#.O..#..O.#.#O...##',
'#O..#OO#.O.......###.OO....OO...O.O.#......##..O.#',
'#O.#...........O...OOOO....O.OO..O#..O..O.#....O.#',
'#......#......O.........#..O....O#..O..O.O......O#',
'#.......#O..O..O.O..#O.....#..#.....#..OO....O..O#',
'#...O......##O.O...O...O......##O........O...O...#',
'#O...OOOO..#.O..O..O.O....O.#..OOO.O..OO.O#.OO...#',
'#....#O...O.#...O........O..#..O....O..OO...O#...#',
'#...O......OO.........##..#.....#O..O..O#O.OO....#',
'##################################################',
];

let movesInput = `
<<>v^^<>>><v>^>^<<<v^<<<^<^^v<v<vv^<^><<v<^vvv<^>^^v>>^>>><>v<>v^^>^>^<>><>><^>>v^^><<<<>>^^v<<><>^<>v^<v><<><<v^<^<vv<v<>^<<<>^>v><>v>^><v><<v^>v^^<^<>^v<>v^v>>>v^<>^^<^v^<><><<^<>v<v^v<v><>^^v>v>^<><^>^v<>><<^<>^^v<v>><><>>^<^<<v<^>v>>^<v>^vvv^><^v<>v><^^<>v>v^<v>v<v^<>><>><v<<<<<<^<^<v<>^>>>^>^>>^^^>>><><>^^>v<<<<v<^<>vv<^>>vv^>^^v^><><<^v>><<>v<><<v>>^>>><<^<v<v>>><^v>>v<v^v>v>v><<<<v>>^^>^vv<^^<<>v^<v<^<v<^v<^><^^<><<<<>v>>^<<><^v^^>^v^<vv^v<>>>>>><^>>v>>vvv^>^>>>^vv<v>v<^>^v>v^<^^>v><v>>^<>^<><<v^<v>>v>^vvv<v<^^^><>^<>vvv<>>>v^^^><>>><v>^v^<<<v^<>^<v<v<<>^<^^^vvvv>^<^<^v>^v<v<<v^^>vvv<<<<>>v>>^^>>>>v><^<>^>^v^v<v<v<<v^<>>^>vv<>vv<v^<<>v<v><>v^v<><v^v<><<v<^<<>>vvv><>><><v^<>><v>^>^<v^<>v^<^<<^^v<<<v<><vv<^>>^v><v<^>>^>>^>^<<vv^<vv<^^vv><<v>>^<<v><v^<<>><<<<v<<^^^>^<><<<^^v>v<>^^^^<<vv>v^<vv<^>v>v<v<<>vv><^<<>><>vv^vvvv<>^^^><^<><^>vv<<>>v>><><>^^vv<<<v><>vv<><^^<<>>vvvv^v<vv^><^<<^>^vv^^><>v^v>v^^v^v^v<<<vv^>>^^>>>v^^^^>><v<>^vv>>>><^^v<>vvv^^^v>^<^vv>>>^^><>^><^^<^v^v>^<^v><>^v<
<v>^>vv^>v>>v<^<^^>^<>v<v^>^v<v<^<>^><>>^>v<<<v><<>>>v<<<<v^^<vv^v<<^<>>vv<^<vv>^^><><^<vv>v<vv><>>>^^<>>^^^v^^vv>^><>vv<^<>^<v>v>v^>>^^v>v><>v^>>>><<^v^<^<<>>>v><>>>><>v<v^v^<vv<<>>v>^^>>>>>v<<^>^v<v<^^vv<<v>^v^^>v^v>^vv>^><vvv<vv<v<^<v><vv>vv<>^^<v^<v<>v>>>>v<<<v>^<><^>^<<<>^vv^<>v>vv>vv^>>v>>v<v^><<v<v^<<><><<^<<vvv^v><v><><^>^>>^v^>>^><v>^<>^<<<><>>vv^>^v<^<v<>>vv><v<v^v><>^^>v<>v^v^v>>v>^<<^<<<><^^><><v<v<vvv<<v<<^><<v^^><v<><^v<^>v<^<<v<^v<<>v<^<><<<<<<>>^<vvvv^>v<>^^<>vv^<^<<^<v<<><vvv^<^^^vv>v>vv><<v><>>^<>v<<<^<<^>>>v>^><v<<^<>^<v^<<<vvv>v<^v>^v^<^<v<^>^v>^^^<>^<>>^vvvvv^^v^>vv<^>vv^^<<<<v<vv^>v><><v^<<<<^<vv<vvv^^<v^>^><>^^<v^v^^<<v<^>^v>^^>>>v><<vvv<<v<^v><^>^<^<><>^v^<v^<>^>^<<^v^>^<^v^>^^<^><^<^^v^><v><<<>v^^<^<^vv^v<<<^><<v<v<<^<><vvv>^<^><><>vv^><^v<^>><v<<<>^v^<><^><<v>v>^<><>^v>^v^v^<vv<<<vv^><^^^^vv>>><<<>^^v<<v<^v>v<v><^<v^v>><><<v<v<<>^>v<>^v^^<v^^^^v^<>v^v>^^<^^>^<>>v^^<v^>>>v<^<^>>v>^vv<>>vv<v^^<^^>vv<>v<vv<>^^^>>v<^>>><vv<v><vvv>>v^>^v<vv<^>>>>><>>^^^><^^v<^^v>v>
v<v>>vv>>v<<<<>^v>^<<<>>v<vv^>^vv>v^>><v>v^^>><^<<<^^v<^^^v^<^>^^><v>v>^<vv^>><v>>><>^><v>v><>v^vv^^^<v>^<^v^><^^>><^>v>>>v^>>^>>^^^>v>v>>>vvvv^^^<v>^>^>^<<<v<<^v<>^^><>^v^v<>^v^<^^^^>^^^^^>>>>>v>>^<>>>^>><^vv<^^><^vvv>v>v>vv<^^vv<>^>vv^>v<>^v^^<v><v<vv<>>>v<^><<<>^v>v<><>>>^^><vv><vv^^>>>><v^<^^^>>>>><^<>^<v<>^<^v<>>vv^<^vv^><>^>^<>^v><<<>vvv^vv>>>vv><^^^^<v^<vv><v<^<<v><>^vv^^v^>>^vv^v^><v<^v<vv>>v^>>>vv<><<>>^v><vvv^<^<>v>>><<^v<><<^<>v^<<>>v<vv<v>v><vv^<>^>vv>^<^v^>>><v^>^v^>>vvv><vvv>><^vvvv<>^^<<><v^>^<>^^<>^vv^>^>v<v><>^>^^^>v><v<>v>^<v<<^v^<<vv^v<<v^^v><^vv>v><^<<^^>vvv><v>v>>><v^v^^>^^>><>^<<v^>vv>v^<<<<>vv<><>^<v<^<>>^^>^<<vvvv<^^>><v^<v><<><<>v<<v<^v<>^<>vv<^>><v>v<><>v^<<<v^<v^<><>v<>^>^>>><^v>^^v^<>v>v>^^v<^<^^><<vv>^>>v^^>^<v><v>><v^<<^v^<>v<>v><<^vv<>^^>><<^v^>vv^^<<<><v<>^>><^<<v>v^>vvv^<^<vvv^^^v<>^>vv^><<^v>><>v<><v^>>>>vv>^>^>v^^<v<>>>>^>^v<<>v<v^>^v>>^<<><^>vv>^<>><^<<^^^v^><>v<<<<<^>v<>v>v>v<^<<^>>^<^^<v>^<^>v^^v<>v><vvv><^<>><<<>>^^^<v<^^v<<<v><^>^v<<^v>v><v^^<<^<
>>vv<^^>v>v^v<><^^v^^^v^>>vv<><><>>><<^>^^^<<^<>>>vv<>vv>>>>v<>v<>^v<v><<>^^>^^><<^>^v>v>v>^<>v^^<<v^^^>vvv>>^^<><^<^^<^>v>^^><^v<>v^<^>vv>^<>^>^<>vv^<vv>v^<<>vv^^>>v>v<v^vv<v^vvvv<v^^^><<^>>v<<<vv>><^>^<^>^vvv^vv<^<>vv<<<>^<v<v<><><v^^<>^^v^>vvv><v>>v<v>^v<<vv><v<^^^^v<<<<^vv>>>^>v>vvv^v<^^>^^<<<^<><^><^v^<>vv>^v^<<vv^><><^><<^v>^^>v>^>><v><^>>>>v>^<^<<>v>vv<<<<<v>^>v^^<>^><>v><vv^<<<^v<^<^^>v>^<><^>v<v^^<v^><vv^vv^^<vv<>><vvv<<<<^<vv^^<v>>>v>^v^<<^><<^vvvvvv>^<>^^<><^<<>v<^<v>^<>v^><v<<^<><>>vvvv<^v>v<>^<>^<<>>vv^^vvv^^>^><^^><>^<>><^>^<>>>><<<^>v<^>^vv^^<<^vvv<>^>>>>^^^v<<>v><<>v>v^v^<^><v^>^v^>>vv^^>>><^>v>><>^v>>>^vv<><>><vvvvv>>v>vv<>^v>v<<<v<vv<><>>v>>^^><^>v<><<v^<><^<vv^<v<>><>v<<v^>>v<v<<^v<^^<<^<<<>v><v^vvv^><<^>v<v^^>>>>>>^^<v>^v>v^>>v^^v^><<<>v<>v<>v^>^v>^<>v^^v>^><^><vv>v<<v><<v<v<^v>v<vvv^>>v^><vvvv><vv<><v><><<v>>^>^<<<^^><<v<^<<<vv>vvv^^v>vv>^>^>^<^v>v^<<><><<<<<<v<vv><^^^^v<vv>>v^<vv^>^v>v>^>>><<^<<v>v<<v<^<<<>v<v>^v^v^>><^<vvvvv^^<<^<v^v>v><v<>^vvvv<>vv^v<^^><>>^v>vv
^^^v>>v<<^v<>^^><<>^^>>>^><v><^^>^>v<^^>vv<><<><v^<>><<^<<><v<^<^<v<<<v<>v>vv<>^<<>^^v><>v<<><v>v^v><^v<>>^^<<><>vv^v>v<>^^<<v>^v>><<>v^<v<<<<^v<^<^^<>^>^v>>>^^v><v><^<<>v>^<^<>^v<vv>><<^<v^>v^^v<<<^^<<^<<^>>>^<^<^v^v>^^<^^>v^<v>^>v^<^<^<<v<^>vv^^>>v^^^>^<^v^vv>><v<v>>>^v>><<<>^<>><><vv><^^^^^^^v^<<^v^^>>>><>^vv<^v<v^><<<<>v>v^v^v<v^>vv^<^>>^v<v<>>^v<vv<^vvv<^<>v^v^<<>>^^<<<<^><v^^>^^^vv^v>v<>vv>>v>vv^v^^<v^<<v>v<>^^v<vv<^v<v>>^^<v<><<>>^>^v>vvv^^>^<^v><<<>^^vv<^>^>^>>^^<<>>v^>^^<>>vv>><<vv<<<>v<<v^<vv<<^v^<v>^<^<vv<>vv<v^<<^v^^v>v<^v^><>^<<<<vv^^>v><vv<><<^vv<<<v^^v>>><v^^v<v>^<v^>^vvv^<v<<><>^^><^<v>v^<>^>^v>^<^^>>^^vv^><v>v<>vv><^>v<>>>v<>vvvvvvv>vv>>>^^>v^<><<>^v^^v^>^<^^vvv>^^><<>v^>>^v<<<><<>>>^<<<>>^v>><^<^<v<>>>v>><v<^^^<<^>v><^<^>v><>vv^<^>>>v^>>>><<^<>v<<v<v^^><<<>v^<^v^<^>><v<^v^<v<^>^<v^^<^^>v<>^>^v<<<>v>><v^>^<<v<><v^<<><^v>>v<<v><^vvv>^<<<<v^v^^<v^>v<^<>>>vv^>>^^<^^<>^v<><>vvv>><^<>vv^<vvv^>^^<^>v^>>^<><<<v<^v><v<<^<^>v<>^<><>>v<><>v<>><>>vv^<^<vvv^vv><v>><>><^<^vvvvv^v><
<^v<v><>>v>>>>>v><><<^^vvv<vv^v><^<>v>v^>v<<<^v<>^^<v>>v^^^<vv^^>v<<^vvvv^<>>vv<<v>^v<<^v<v<<^<v<<<>v>>^>v^<>^<^vv<^^<^v<><<v<<>v^^v><v^>v^^<v<vvv><v^>v<^v^<v^<v<v><>^><><>>>vv^v>^><v^>^^<>>^v<v<<<<<><>^v^^><<<^>>^^^<^>vv<><^^<>>^<<v>>>>^>>><<v<<<><<vv<v^<vv^<v^v^v<v><>>^^><v>>vv^>vv<v<vv^<<v^v^<>vv^vv<v<^^v<<>^<^<v><><<^vv^^v>v>><v>>^vv<^^v<v<<<v<^^>v^>>>^<>>^><>^vv>><<^>^<^^<v<v>vv><>>>>v>vv<^v^>v^v><v>^v>^v>><><>vv^<v>>>v<<vv^^><>><^v>^<^^^<v<^<>>>^v^^^^^<<<<<<^<^>><v<>>>>^>^<vvv>>>vv><>>><<<<<^^<<v>>v>v^<>^>v^<v<>>>>v>^<<<v<^>>^^v>>v>v<<><>vv>v<>>><^v><^<>^^v>>v<<<^<^><<>^<^>v^><v^>v^<^><><<^<>v^<>^>^<^v<v<<^<>>^^v^<>v^<vv>^^^<v<vvv<v>^v^<>vv>vv>^^^>v^<>^v<<<vv>vvvv>^>^>^>v^>^<^>^v<<<<><vv^v<<<v<v>>>>v>v^>>^<v<><>v>v>^>v>v^^v^<^^<v<v>vv><vvv^<>^>^<<><><>^^<v<^^><<<v<<<<v>>v>>^>^<v<<<>^^>^v^vv^>><<>>>^^v^>v<^^^v<vvv^<v^<^v^v<v><<v^^^v<v>>>>v<^<v<^>^^^v^<>vv>>>>>v<^^>v<v>v<^v^>><^^v^<vv>>>^<>>^v<>^<<^><>vv<><<<^<<^<<>>vvv<><^>v<v^^<>>vv^>^^^v<<v^<>>^<<v><>>v<>^>><<<^>v^<<v^<<^v<<<^>v
<<<>vv^v><vv^vv^^^>v<^<<>>>^v<^<<^^^vvv>>^<>>^>v^^vvvvv><v^<v<^><^>v^v<<^v>>^>v><^v><^<<vv>v><v^^>>^<>^v^^><<><>v<<<>^^>^<v>><^<v><><>v^<^>><v<>^v>^v>^vv<>>>>^><<>^>>v>>^><<>^^>v>v<vvv^^v>>^<^v^^^v><<>>>v>><v<^^>vvv>>><<<>^^<v>vv<<vv^>>^v<v>^<<^v<^v<<><v^^>^<v<<^>>v<><^v^<>^vv^^v<>vv>v<>^>>>>v^<>v^<v<<vvv^>vvvvvv<^vvv^>>^^>v<<v^vv^^<>v>v^<^>v^<<v><^><>v^>>^^^<^^^<v^>>>v^<<^v<v>^^<v>>^^v^<>^v<^>v<>>>^><<v^^<<<v^<vv>v<<^v^>^<<^<>v^vv>vv<<<^vv<<^<<^<v<^<^<^v^<v>^>><<>v^vvv<^v^v><<>><^>^^vv^<>>^<^v<<<<<>v><><^^>^>^^vv><>>vv<<>^v<v>>^<>^>v<<>>><v<^>v>>^<<^>^><^v<>^><<>><^<^>^v^^vv<^<^<>^>>vv<<<^^>>v>>>>v^vv^^^^^<>><>^<^<^<<<>>v<^^>>v^<v^v><<<^>^^>v<v^<^^>^^v<v^<<^>>v^>v^><>v^^^><><^<>v^><><^vv<v><<>v^v^v>^v<vvv><>^<><v<^vv^^v><vv^>^v^<^^>>vv<<>^^<>v>><<><><v^v>><><vvv<vv><^vv>^^>vvv><>>v^^v^>><vv>v^v^^<<<<^<^v<v^^^vv^>v^>^v^^v><>^^^^vv><>>v<<^><<v^^><^<vv>^v>>v<<^v<<^^^<^^>^^>v^>^v><><<<<>v<^><vv><<>^><><><^v>>^<v^vv>^<vv><^^v^vv<^vvv^v^<v>><^^<v>v^<v^<>>><vv^^^v<^>v^v^>>^>v<v<<<^^^><<><<><
^>v>><>v<<v^^^<^>>^<<<<>>>^>>v^<<>^v><<<<^>^^^v<vv<^v^^>>v>^>><vvv^<<<>>v>v^<<><^v<>v>^><>v>^v^v<>><>v^^vv^^vv^<^>^>v><<^<><<<^^><>vvv^<>v><<v>>>^v^>v>^>>^<<<>v>^<^^^<vv<>v^>>v>><>vvv><<>><>^<v>v^^<><<v><<vv<v>><<>>>v<<^<><<^<>><<vv<^^v>vvv>^v<<>^<>v^>>>>>>>><><^>^^^<v<v>v<<<>^<vv^vv^^><>v<>^^>v>^><><v^><<<^>>vv^^^<<<v<^>><^><v^^^<<v^>>^v^v^>><<^v^v<<^<^><v>><v<v>v>^^<^<v><<>v^v<v>^v>vv^<^vv>^v>^^v<^^<>><<>v^<>^><<v^>>^^v^^^^v^^<v<>^^v<v<<^^v<<<v<^^v><><<>v>^^>^v<>v<v<>>^v<<<<>>^^><v<vv<>>v><<>><<>v>v><v<>v<^<^>>>^><^^><vv<<^^>>>^>vvv^vvv^^<v>v^>^v^<>vv<><^^^>v<<><^<^<^v><<vv>^>><><><<^vv<^vv^>^>v<<v^<v>^>v>><<v>v^<^><<<v<v>><>v<vv^^>^<v<>^^vvv^<v^v<<>>>><>><>v<>^>>v><^v^<<v><<^<>>v><>>v^^<^v>v<<><>^>v>v<^>v>^v^^<^<^^>>vv<>>v<<>v>v<vv^^v>^^>v<v<>v<>>>v^>^>v>^v>>v>v^<>>v><>v<<v^<v^^>^<<v^^<v<^<<><>v>v^><v^vv<<<><^v>v<>vv>^>^v^^^^><<>^v>v>vv^>^^<><<>^v^^<<<<v>>>>><v<v^^>>v>v>>^>vv><^>>>>^><v>^>v>>v<>>v>^>>^v<>>><v^v<>^v>>>^vvvv><<<v<<^^<>>>v^^<^<v^v^<^vvv>v^^>vv^<>^<>v>>v>vv>>>>>^<>^^v><
><>^<><^<<<v<>^<v>>><^v><<v>>>v^<^v<>>>^^^v><v<^^^^^<^>>>^><^<^vvv<<>>^v^<^>><^^v><>v<<>^<<v<>>v>^v>^>v^v^<^v^<^v>^<^>>^^><<<>^>v><^^v>>v<v<v>>vvv>^v<^v^<<v<>^><^><<^<v^>v^<v><^<^^<>>^>vv>^<<<<<>v^>^^^^v>v^^^v^vvv<^^<>><>v><<^v^^vvv<^>^>^<v^^^>v>^v>^^^>v<v<>v^^v^v>v^^v>v<>v>v<>vv>v>^^<<>^v^vv^v<^^>v><v<>^v^vv^v>>>v>^^vv>v^^vv^^^^<v<<vv<<>v>v<<<<^^vv<vv^vv<vv^v<>v>^^v^<<^<v<v<<vv^<>v>v<<^<^^<^vv^^<^><v<>^^^^^><<<>><^<>v>v^<^^vvvv>v^vv><^v^^v^>v<<^>vv<<>>v^<>v^<<v<vv^>v<>^><<vv^v>^>^>>v^>>v^^<v^v>vv>vv<^><^<>^><^<>^><^>^<>>^>>v>^<vv<>>^><>v<v>>^<v^<^><>v<><<>v><^^<^v><><^^v^v<><vv>^v<^>^>v^v<^v^>^^v<^<<><v^vvv>v^><v>v<<>><v^>^v^<v><^>^^>>v^>><^><vv>^v^v<^<>^><v<<<v^<<v^^^>v<vv^>><^><v>^>>^^v<><<v<^<v><>>v^^^v^<<^v<^<<vv<<^>>><vv^><v><>>^vv<<^<vvv><^<vv>^v^><^v<<vv^<^^^<<^v^>v^v<>v>><^>>v<^>^v^^<v><^^^^>v^<>^<>^>>^><<<>vv>><<^<>^^^<><>vvv^>^><^^<^<<^<v<><<<v><v^<vv>^^^^v<v<^<><^<>v><v>v^>^>v><v>>v^^<<>v><v^^<v<^><<>>^>>^>^v^v^>^<v^>v<<^^<^v>^<v><<>vvvv<<><^<v>>v>>v<^<vv>v^^<<vv<v>v><>v><>
<<v<vv<v^><^^<v^vv>v>^>^^^<>v^v^<v><v^^<v<><<v>^>>^v^^^vv>^>>^vv<<^v^>v^v^<>v^<>>v>vvv>>><^^>^^^><><<vv^<<<<<^v^^<^>^v<^<>^vvv<<v^v<^^>>^^>^v<vv^vvv^>^>^<vvv>>^v>>v><<<^<>^v<^v>^^><>^vv<<^>^v>v^^>^<v^<<v^<>^<<>>v<v>^v<><><^v<^^<^>^>><>>>v^vvvvvv^^v<^vvv><>v<v>>v^^>^^<^>v<^<^^vv^^>^>^v>v><>^^^<^v^^^<v><<>v>^^^^>^v^<<v^><^v>v>^<^>><v><^^>vv^<>^>>>><<>^v<^^^>>vv^^<^<^<^^^^>^^<<<>^<>><v<v^^<<vv^<v>v<^vv^v><<v<<^v<^^v<^>>v^<<v>v^vv^^^vv^><><v>^>>>>><>>v<v>v>v^^v>vv^^^<v^^<<v<<v^^vv<v^^vv><>^>^vv>>v<<^><<<<v><^<<<<v<<<<v>^>>v>^^><<>><<>v>v<^v>^vv^vvv>>v^<>v<>v<^v^^^>^>^>>>>vv<v<v><<<<>v^<<<<<<^v^><^v>^>><><<><><v>v><<>>>^v><^>^v^<vv>v<vv>><^<<<<^v^<^^v^v<>^>><><<>>^><>v<<v<^vvv><>><^^v<<vv<<^^v^vvvv^^v>>>^^>^<^v<<<>><vv<vvv><<><<>>><^><>^<v><>^v<>v>v>^>^^>^<^^^<^v>>>v>^><^<v^v^<<v^v<><vvv>>>^^<<vvvvv<^^><vvvv<<<>v^^>>^^>><^><v^<v^><><v^>v<>v>v^^vv<<v<>v^<>vv<^v<^v>^^<v^v^>>^v<^<^^^^^><<<vvv>v^<vv<<^v<<<<^<<^<<>>><^vv>>^<<<>^v<>>><v>v<>>>>^<v<v<^^<vv^^^<v>^vv<<>^>v<vvvvvv>v>v^<>^v<<^^><^><><>
^^^<<^<<v^vvv<^<^>^^v>>v^<vvv<<<^^^>v^v<>^<v>>^>^<^>v^^<^<>^>v>^>>^><<v<^>vv<<>^^<^<vv><>v^vv>>>>>><vv>>>^^>^<^>>v^vvv><v^v^>vv^>>v^><>>^<^^>^^<<^><^v>>^<^v^v<<>v^v<>^<<>^<<vv><vv^>^v>^><>v>v^^v>v^>>vv>>^>>^<vv<<^><<<<>>^>>>v^v>>^><<^<v>v^v>^v^^v<<>vv>vv^v<v><v^^<^<v^v^v<><^vv^>^>^<>^vv>>>^<^^<v>><^^>^v^^<<>^<v>><<>^<>v><<>^v^><v>^^<^v<vv<^<>^<<<<^^>v<>>v<v>>^>^v><<>v>>v<^><><><^<<^v><vv^^>>v<^<v^>^^^><v>^<>v<^>v^<v<^<vv>><^<>^^<>^^<v^^>^^v<>v^<>v^^<>^^^^>^>v<>^<^vv<<>v<<<>^^>^<<<<^<<^^>^>^^>>>>^^>^<<<v^><>^^<v<>>^>><><vv><v<^v^>v<^<><^>^^><><>vv>^v<v<<<v<^<v^<<^>v<^<<vvv^v>^vv^vv<^>^^>vv<<<<v^>^>^>v><^v><>^<^<^><^v^vvv^vv>vv><<<><^<>v^^<vv<>v^<^^^vv<<<v>^v>><v^^<<<>>>^v>^>>>^^v^<>v^v><<>>^v>^v><^><<<v<><><<v<^><<^v<^<>v>v^vvv^^^^><v<><v<^>^v<v<^<>v^^<^v^<^>^^<<vvvv^<^>^v<<^v^><vvv<<<<^^vv^>^<>^^v^^<><^<<<^^>>^^v^<>^v>^vv<<<<v>^<<v<vvv^>v<^v^<v><^>v^<^^v>>^<v>v^>vv<v<v><<>>v^^>^^<^^><<^>v^>^<vv<>>v>^v<^^v^^v><<<>>^<^^v^vv^^v^^<^^<>v<^<>^>^<>><>^>>v<>^<^vv>^^<v^>^vv>v<v<v<v<v>v>v>^>><^<
^v<^v^<^<^^<>vv>^v^v^^v<^^^^<<^vv>>^>>><<v^v^>^^>vv<<>^v^>^<<^v^^>>><>vv>v<<<<^>v^<^><vv^vvv<<vvvv<>vv<<^vv<^v<>v^>^v^vvv>^<^><>vv^vv>^^>v>v^<><v^v>><><>>^>^v<^>>^^v<v^^>>v<^<>v>^^^<>v^v>>^^^<vv^^<v^<>v><v<vv^>>><v^>>^<vvv^^^^><>v>>><^>v^>>^v>^^<v^<<><<^v<>^v<vvv^<v^<><<<^>^vvv><<><v>^^>^<<>vvvv<<><vv<v>v^>v^<>vv<v><vvv>>>^v><^>><<^v>>v<>vv^><>>v>v<^v<>^><>v<v^>^<v>^vv^v<v<<><<^v^>v^v><vv>vv>><v^<vv<^><v<^^<>>><v^<<^>^vv^>>^^vv<^>>^v>><^v><>^<<vv<<v>^v^v>^<<<<v>^v<^^><>vv>v^v^v>v>^>><^v<>v^><v^<>^v^><><v^>^>v<<v>v<>>>^<vv>^v<<v^<<<^><>^^>^<v>^><vv>v<^v<>vv><^vv<v^>v^^>><^vvvv<v<<vv^v^vv<>^<v><v^^<^^<<>^^^vv>>^<<>v>v>v>v^<><<<<v^><v<>>v^<^>^>^v<>>^v^<><<vv>><^^^><<<<<>^v<<<>^v^><v<vvv><><>^>>>><vv>v<vvv>v<>^v<<^><>>^v^>>vv<^v^^v<<^^v^<>><>>vv<v>^>^<>^v^>^v<v><>v<v>^^><v<><v^^><v^<<^>>>vv>>>vv<v^<^<v<v^vv>^^>^^>v<v^vv>^v^<>>>>v<vv>>^v><^>^vvv><v<<v>v<>><^<>^<>vv><>^>v^^>>v>>v>^>v<>><>>^v<>^v<<^<><>>>v>v<^^^<<<v<vv<<>>v>v^>^><>^>v^<<>^>><>^<>>^^<^v<>><<>>^<^>>>^^<vv>vvv>^>>^v>^v<^v<<>^v^^
^><v^^v<v>v><<<><>vv<v<>>>v^<>>>^^^>v<v<v>>^v<v<><<>><><^^v<v<<vv^vvv<^^>><^>^<v>vv>v>vv><>>v<^<^^>^^><<<<^<>^<<><^>v>^v^^<>^<<>>v>>v^<<^vvvvv^^^^v<v<<^^>^v<>v^>v>^<>^>>><^^><>><>^^vv^<^^>v^^v>>v<<^>>v^>>v^>>vv><vv^v^v<^<><<>v><^<v^^^>vvv>v><>>^<>>>^><vv^vv^<^^vv>v><vvvv><>vvv<>>>>v<v^>vv^v^>v<><v<v^>v^v^<>>>^^v<>v^>>^^^>^^vvv><v>^>^v<>>>vv>>>^><v^vv<^><><<v<<^^<>>>v<^<<v<v>v>><v^^^v<^<vvv^^><>^vvvv^>v>v>v^^v<<v^v^<>vv^v^<^><>v<v<vv>^^vv<><>v<v>>>>^><>><<^<>vv><^<>><>^<^<>>v<>><v><>v><v<>>^vv><<v<^^<>>>^>^<>>^>>>vv^<vv>vv^<v^vvv>^<^v<^>v>>^>>^v^^><^<^^^>^>>^^^>><<v^>^><<v<^><<>>^<>>v>v>vv^^^^^<><<v<><<<<^<<><>^>>v>><v<<><>^^>v^<<>><^v<^>><^v^>>v^<<^><>^^>^<vv>v<^^<^>^^>vv^>vv<>>v>vv<v^<v^v^^>>^^>^vv<<<v<><>^v>>v<^^<>>>>vv^>><v^<>><v>^^^<v>v<<<<^<^^><<>>>v>^^^vvv>v^v^^v^v^vv^>^^>v><v>v<^<^^>v<^><><v>^>^>^>v^><^<<v^v^v<<v^<vv^<^vv^>^^><v^<vv<^v>v>>v<<v>>v<>vv<vv><><>v^<>><><^vvv<^<^^^>v^^v<^>^<<v^vvv^^>v>>>>^^^<>vv<v^v^^^>v><><>>><>^<<^^v<^>v<<<v^^^vv^<vv>^v>^><><^^^v>^<^^<^>>^><^^v>vv^>
<vv><><>^^^><^^^>>v>><^>^<v^<vv^<v<^^v<<><v<<v^^>>vv<v^>^>>^v>>><vv<v<><vv<><>^v<^^><v>>>v><>v^^v^^vv^><^<<<v<<^^v><v>^v<v<<><vv^<v<vv>v>>^vv<<^>^<<v^^^vv>>>^^<^v^>^^vv>^^vv<^><<v^>v><>>v<^v^vvvv<^v^<><^v<^^v<^>>vv^v<^^<vvv>^<<v<<^<^v<><>^v><<v<>^>>>v^^v<^<<vvvv>^^v<<>>^<^<v>^v<<<>^v>><^vv>^^^<^^>^^v<<v^^^vv^v^v^><vvv<^><<<^v^v^<v>^v<v^>>v^<v^v<>v^<^^^>vvv<vv<v<<v<^<^v<>^<vv>vv^>>v>>^<><>vvv>><><^>^>><><>^>v^>v<>>v<v<<^<<v>vv>^v><<<^vv<vv>v^>v<>><^^<<^>v<><v<^^>v<<^<<<^^^v^>vv><<<^^^<^^^v>>><>^v>vv<v>vv^<v>>>><<<vvvv^<<>>^<v^<^>^<^<>>^>v>><<>>v^v<>^><<^>^>^<^v^^v<^v>vv^v<>v^v><>^v^<vv><vv^<>><<>v^>^<<<<^>v^v>>v>>vvv<^v<>v><><><^vv^>><>>^>^><><><^<>^>>>>>>><<><vv<>^<v<v>>v^<^<<<v<>>><<^<^<<v>^v^<^v<>^^<^>v^^<^<>^>^<>>vv<<v^<v<^v^vvv^^^v<vvv^<>>^v<<<v^^v<<^vv^v^><<^^>>^<^<>^v<><^>v^<<^v>^^^<^<vv<^<vv><<^v>v^>^>>>^><>vvv><^v<^^vv>>^>v>^v>^<v<v<>^>><<<><<vvv<^^>>>>^^v><<v^vv><<<>v^v^v^v>><v^<vv<^^^><<v^^vv^<^<v<^<<^>v>^^v>vv>>><<^^v<^>^<^>>>^^<<v<^^<vv^><v^^^<>>^<v^v><v>v^v>>^vvv<vv<<<>^v<
^<v><^<<v<>^^<v^v<>v^>vvv^<>^^><^<v^>>vv<v<^>^v>^^<^>vvvvvv>>v^v><<^v^vvvv>v>v^^>v><>><<<>>v^^>^<v<><^v><>^>^>^^<<^>v<v><><v^<^^^>v>v<><^<v><>>v^v<<^<<>v>vvv<v<v<v<<<<^<^v<v^v>>^<^<^>>>v>>^>vv<>^v^^^v^>^<>>^>v<v><>v<^v^v<vv<>v><vv>^<v^>vv><^^v><<>^>>>vv<>v><v<><>v>^^^^v>vv>>><^<<^^vv>>^vvv>><v>v^<^v<<^<>v^>v>^<vv^^<>>v>v<v>^^>vv^<^>>^<v^v>v<><^v<<<<^>>v^v<<^v^>><v^v>>><^>v>^v>^vv<vvvv^^^<>>^^<>^vv^^^><<>>vv>^<<^^^^<<v^>v<<v>>><>>^^>>v>vv<>v<^>^<<><^v^><>>>^^>v><v<^^v^<v<^<>><<><>v>><v>>^^v^^^<><v<<v>^^vv^<^^<>>^v^>^<<vvvv<><^v<v^<>v>><>^^v>>v>v>^>v^>v>v<><v>>^^<>v>vv<v<v^>>><v^v>>^<^vv>v>v>^^>vv<v><<^><vv^v>^>^v<<^<<<<^v^>>>>>v<^v^><^<^^><v^<<<^>v<><vv^^^<v^^>v<^vvv<<>>>v^>><<v<<^^>v<>>v^v^^><^v>^vvv><>><v<<v<^>>^<>v^>>^^><>^v^><>v>^<>v>^>><>>^^<vv>vv><<>v<vv<^>^^^><>vv^>>v>v^vvv<v><^v^<^v^<<v^<<^v<><v^v<v<v<^v<v><v<^<>>^^<vv^v>^v^^v><^v><>v^><v><><^vv^v<v^v^>v>^^v<v>>v^><vv>^<<><<><^v^>><vvv<><^^^><<><vv<<v<v^v^><>v^<v><>>>><v><<<^<v>><^>v<>^v><v<>vv<><<^<v^>^>^^vv<v^v<^v<vv>v<vv^>v>^
>^>v<<<v><<v<^^^v>^v^^v><^^>^>v^^vv^>v^<^v>v^^vv^<<^^v<^<v>^v<^<>>v^>>vv<<^<^^><<^>^^^>>^<v^<v>v>>>^v^vv<^<^>^<vv<>>^v><<<>v^<^>^><v<^^<^>v<>^v^v>^^^v>><<>>^^<v^>^<><vv>><><vv^vvv^v<><^^vv^^^v^^<><<>>^><>^<><v<v^<v^<v<vv>>>>><v>v<<^><^<>^vv>^^v^v<^<^v^>v^>><^vv<^^>^>vvv>>v<><v^>v<v^<^vv>v<^^<>>>>^>>^>^>^v^vv>^<>>^^v^v<v>v>vv>^<>^^^^>v<v<<<<<^^>v>v<vvv>v^^^^>v<^><v<v>^>><^>><>><>>>>>^<<^<<v<>>>>vv<^<><>>>vv><<^v>v<^<v^>>^<^v<^<>><^^>^v^>v<v<vv<vv<^<<<<^<^>>>>v<^v><<^v^v<^<<>^<^>v^>>><>^><<>v>>vv^><^^^v<v>vv<>^vv<>v>v^v^<^>vv<v>v>^^^>v^>v<^^<v>^vv<<<<>^>v<vv<<v^^vv>^><^^v>v<^^v^>^>>^v<v><>>>^^v^>vv<<<>v>v>>vv^^>^v>^^><^><^>>v>^<>v^<v>>v^<<v^^v>>^<<v<>vv^v<^>>>>v^>vv^>^<>v^><>v<^^>v^vv<v<>vv^>>^v<v^^^^<<v<^<<<><><>>^^^>^>>^<v<^^<^>^>^^v>v><^<>vv^v>>v^>^vv^<<vv>>^^>>>v^^^^^^^^<<<<>v><<^^><<>^>>^v^>>^^><<<^^>^vv>>^vvvv>v>^>>>v>^v<v^><v<^^<<<^v>^>^>^v<^<>^^>v><<^<^v<<>><<^>v>^vv<<^^>^v>^v<<<^v<<vvv<<vvvv>vv^>>v<v>>v>^v>><^>v>v<vv^<<<>^^<>>v<<v<>v^^>>>v^<>v<v<v<^^<<<^^>v>>>>^^^vv<^^v<>^^<<>><
^^>>v<^v<vv^<<>>v<vvv^><v^v>>><<v<vvv^v<>><>>v><<v^>><^<v^<<>>>><^><v><<vv<<<<^^vv^<<^^^^<<<>v^<<v<vvv>vv<v^<>^vv>^>>>^<>>v>>>^<<v^<^vv>>^^v^vvv>^><vv^><vv<^^^>v>^<<v<^>>>v>v^<<<^>vv^>v^v>^^v<^^><><<^^>^^^vvv<v>v<<>>><vvv<^^^><^<^<<>v<>v<^^><^>v<^^<<^<>><><>v>>^v^>v<<>v^v><vv>^^<><^<v^>><<^>>v>vvv><v^<v^^>>^<^><^v>>v^>v^>v><v>>>^<>>><<vv<v<vv^v<<><>><^<<><>>^><vv^v<^>>^>>>v>>v>^<^v<vv>^<^><^<>>^<<^<<v^^v^v^>v^v^>^>>v<^>^<v>^v<v><vv^^><^>><v>>vvv^v<^^<v<v>v>v<><>^^^><^><^>^><>^<>vv><v>>^v^<v^>vv^<<^<^<v^^v^^v<^>^<^><>^<v<v<^>v>>v^<<^v<^><<>>>^>v<><v^><<^<vv<v^<vv<<>v>v<^>^<v^v<vv<>vv^^^<>^>v>>^>v><>v>^v><>^<<<<>^^<><v^^<<<^>><^<>^<>><^v<>vv^<><v><v><vv>>^>^<<^vvv^<<>>><^<><<<<v^<<v><<v<^v^<>><<^^^^v<><^vv^vv>><><vv^<>^v>^<v>>v<^^vv<v^>>v^<^vv>v<<<<vv^<^<^v<<>>^<^vvv^v<>vvv^v^v^<<^<<>vv><<^^^><^>v>><v>^<v<v^<>^<^vvvvv^v>^>^<^<v^vvv^^>>vv>vv^^>v^<><>^^>>v><v>vv>vv<^<vv<^vvv^<<<>^<^>>v<^<v^v<<>^>v<^<v>^<v<^>^>^<><^>>vv<^^v^^><<<<>^v^v^<<>>>><>^>v>v^^>^<<^><^^v^>v<^>>><>vv^^<<<<vv^<^>v>v>><
>v>^v^>vv><>v^<>v^>v<^^vv<><^<v<<>>>>v^v^v>^^v<>^vv^<>^<><>>><<^<<>^<<<<vv<<vv>>>v<v^<^>vv><^v>^<>>^v>v>v^^<>v>^<^vv^<<v^<<v>><vv<<>^^^<^><<><><^^<<<>v><v^>>^>v^>^>^v^<^<>><v^^<^^>^v^v><>^^v^^>^vvv<^v<<>^>^<>>>v^<^>v>v>^^<^><>^^v>v>>>v>>^v^>^^^^v>v<v<^^^vvv<v^><^>^>^><v^<<>>^<>^^>>><<<^^<v<v<<vv<^<<><v><>^<>^><^v>^>>>^>><v>^><>vv>>v>>vv<<>^^<><v<^^^^><v>^^v>^^^<v^>v^v^>v><^vv><<><^>v^^<>>^<<>v<v>^>^<<^><<><<>v^^^^^v^<>^^v<^v<v>v<>>v^<vvv><^<vvv>>^<>v>^<>^<<>><v^<v><^>^>v>>vv><vv<v^<<>>^><<^>v^<><^v<v<>^><v>v^<<v<<^vvv<<>>v^^<<<>^^vv^>v><vv>^><<v^><>v<>>>>><v<^<v<<<<v^<v^><^^<<<v<<>v<^^<><^vv><>v^vv>^^><vv^^<<vv^v^v<>^><<^>v<^vv<>v<<<v<<^vvv>^v>>^>^^^vv^<vv<><<>^vv^v^v^>^><<^<<<^<<^^^>vv^v<^>v>><^^vv>^>^>v>^>^>v^^v^<v>v>>^<><vv<vv^v>^^^>>>^v><vvv>>>v>vv^v<>v>>v^>><^>v<><vvv><v><^>v^<^>^>vv^^^>>^^<>^^^^<<v<<<>^vv^v^vv>><^v<<<^>><^>v^^^><vv>>^<^v<>v>^<<^>v>^>v><v<<^v><v^><v<<<v<>><<v>><^v^^vv<^>><v^><^^^>vv^><>>><^^>^>>^>^^>v^^<^><>><><^^^>vv^^vv^><<<<<v<<^^vv<v>^<>>>^v<>vvv>^<^v^<v><>v^<
<<vv>vv<<v>^v>vvv^v<>>^<^vvv<v>>>>>v>>^vv>>v>>^^^v>v^vv<^><^><^>>>v<v>^^<v><>>^>>><><<<>>^v><><vv<v<^<>^<>>^^v>>vv>>v^<^>v><^<v<v>^>^v^<^^><>v^>v>^>vvv><v^<<><v^<<>^>vv^^<>vvv>v^<<>>^^^<>^>v<>v^v<<<<><^><<v<^v<<v<^^v>^^^^<<>>vv<^<>>v>>><v^^<>><^<vvv<vv<vvv^><<vvv<<v^>^<^<^v<<<^<<^v<vv<<<<<><v^<>><><>^v<<^^><>>^<^>^^vv<^^vv><>>>vvv>v^>v<^vvv>^><^v^<>v><>v^>vvv<<^^<<vv^<><<v^^^^v^v>v^>v<>>^<><vv^v><>^^>^<>v<v^>v<^v<<<<>^<>^<^<<>v<v^^v<<v<>><>>^<<^<vvv^<^>v^>^v>v<><>v>^vv<<><v>><>^v<<^v^vvv^>v<><^>>v^>>>v<<v>>v<^v>>vv>><<>vv<^v><^^<>^<v^^v<<<<v<<^>>>>^^<<<^^^><<>^>v^>>><v>v<v>v<>><v^vv<<><<>^v^^vv^^<v^^<><>vvv^<<v<<^<^v^>^vv<<v>vv<<v^<vvv^>^^>v>v^v<<>^<v>v<><>v><>^><vvv^>v>^>>>^v<><^v^^^^>^v^v<>^><^<v>^<v^^v<^v<<v^^><>^^v>>v<<<^^^^^><<>v^^v^>>v<v><^v^v^v^v^v^>><>v^<>>^<>v<v<<^v<v><>^^><v<<v>^^>v^>v<v<v^<<>^>v<v>v>^^^<<^>^<>^<<<v^<><^vvv>v<^<<v^<^^<^>^>^^v^^^v<^^^^vv^v^vv^^>^v<^<^^<<>^^<^><^><<<^<>>v^>^><^v^>>^^v<>>^>>v<^><^>>^<^><^v^^^vvv>v<^<<^>>^<<<<>vv^v>v^^<<^^<<<<v><^v^v<^>^<^<v^>^^^
^>^v<<v^>^>>>><v>>^><>^><><v<<><<<<>v<v>^^v<^^v^><^<>^vvv<^v<<^<<^><^<>v<<>>^v>>>v<>><v><<v<vvv><^vv^^^<>vv^^<v<<>>^v<^>^>v^^>v>vv<<v>^^^<>^^^>>v><><>>v>^<<>^^^>>>vvv>>^><>>>v>v>>v^<^<v^><><^^v><^><<><><^>vv><v><vvvvv<<^^^<>>^>v><vv<>>v<>>^<<<>>v<>^^^vvv>v<<<<v>vv^<>><<><<<^>>v>v<>v>v^<<<<>^v^v^^vv^v^vvv<^><^^<<>v>^><><vv<v><>>vvvvvv>v<v<^>><^v<^^^v<v>vv^v>^v<v^vv>^^vv<v>^^v^^>>^^<<>>^^><<>vv><^^>v>><<^<v>^^>^>^>v^<^>v^<^>>v<>v<<><>^<>vvv>^vv^<>v^<<>><<v^v^vv>^^<<<><<^>><v>>^v<v^vvv<^><vv^<<^<<>v^v<>v<>^vv^^>v^vvv^<>^>>v>v<v><<<<^<v<<^>vv^^^^^>v^v<v<v>>v<>>>^^v>^v<^v^<^>>^><<v^>vv<v^v<^v^<v<v^<>v>v<^^>v>^^<<<<>v>>v^><>^v>>vv>^v^^<<<^v>^v>>v<^>v>><>>vvv>>v><vv<>><><^>>v<<<<v^^<>v<v<<>^<^>>>v>vv>v^>v<<v>>>^>>>>><^^<v^v<<^<v>^><v^>v><>^<>>^vv<^<><>><vv<>vvv>^v<v^<vv<v<^<<<v<>>v^^<v^v^>>>^^v<>v<v^>v^<>><><><>^>>^<><vv<>><<v^>^<^^><><><>v^^v><>v<^>^>v><^^><v<<>>vv<<><^><<^^><<>v^<<v<v<v^v<><<vvvv^vv^^<vv<>v^<^<>>v^v>>v>v>v^^^<^vvv<v>^>v>v>^<<^><^<<v<>v>^<v^v^v>^<<<<>v<v^v<^><^<<vv<>^^><^v>v
`;

// mapInput = [
// '##########',
// '#..O..O.O#',
// '#......O.#',
// '#.OO..O.O#',
// '#..O@..O.#',
// '#O#..O...#',
// '#O..O..O.#',
// '#.OO.O.OO#',
// '#....O...#',
// '##########',
// ];

// mapInput = [
// '########',
// '#..O.O.#',
// '##@.O..#',
// '#...O..#',
// '#.#.O..#',
// '#...O..#',
// '#......#',
// '########',
// ];

// movesInput = `
// <vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
// vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
// ><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
// <<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
// ^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
// ^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
// >^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
// <><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
// ^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
// v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
// `;

// movesInput = `<^^>>>vv<v>>v<<`;

const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
}

let robotPosition = null;
const map = mapInput.map((a, y) => a.split('').map((b, x) => {
  if(b === '@') {
    robotPosition = [y , x];
  }
  return b;
}));
const moves = movesInput.split('');
console.log(map);
console.log(moves);


const canMove = (position, heading) => {
  let y = position[0];
  let x = position[1];
  let go = true;
  let boxes = 0;
  let isBox = 0;
  do {
    y = y + heading[0];
    x = x + heading[1];
    isBox = map?.[y]?.[x] === 'O';
    console.log('nextPosition', map?.[y]?.[x], isBox, y, x)
    if(!map?.[y]?.[x] || map?.[y]?.[x] === '#') {
      go = false;
    }else if(isBox){
      boxes++;
      console.log('boxes', boxes)
    }else{

    }
  }while(go && isBox);

  return { go, boxes };
}


const render = (arr, sum = 0) => {
  for(let j = 0; j < arr.length; j++) {
    let str = '';
    for(let i = 0; i < arr[0].length; i++) {
      if(arr[j][i] === 'O') {
        sum += 100 * j + i;
      }
      str += arr[j][i];
    }
    console.log(str)
  }
  console.log('    ');

  return sum;
}

do {
  const direction = moves.shift();
  const heading = directions[direction];
  console.log(direction)
  if(heading) { // not new line
    const [y, x] = heading;
    const {boxes, go} = canMove(robotPosition, heading);
    if(go) {
      map[robotPosition[0]][robotPosition[1]] = '.';
      robotPosition = [robotPosition[0] + heading[0], robotPosition[1] + heading[1]];
      map[robotPosition[0]][robotPosition[1]] = '@';
      console.log('new robotPosition', robotPosition)
      for(let i = 1; i <= boxes; i++) {
        map[robotPosition[0] + heading[0] * i][robotPosition[1] + heading[1] * i] = 'O';
        console.log('push', robotPosition[0] + heading[0] * i, robotPosition[1] + heading[1] * i, map[robotPosition[0] + heading[0] * i][robotPosition[1] + heading[1] * i])
        // console.log('push', robotPosition[0] + heading[0] * i, robotPosition[1] + heading[1] * i)
      }
    }
  }

  render(map);
}while(moves.length);


console.log("final: ");
const total = render(map, 0);

console.log("total: ", total);

console.timeEnd('run:');