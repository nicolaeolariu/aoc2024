console.time('run:')

let mapInput = [
'#############################################################################################################################################',
'#.............###.....#...#.........#...............#...#.......#...###.....#.....#...###...#...###.......###.....#.........................#',
'#.###########.###.###.#.#.#.#######.#.#############.#.#.#.#####.#.#.###.###.#.###.#.#.###.#.#.#.###.#####.###.###.#.#######################.#',
'#.......#...#...#...#...#.#.......#.#.......#.....#...#...#.....#.#...#...#.#...#.#.#.#...#...#...#.#.....#...#...#...#...#.............#...#',
'#######.#.#.###.###.#####.#######.#.#######.#.###.#########.#####.###.###.#.###.#.#.#.#.#########.#.#.#####.###.#####.#.#.#.###########.#.###',
'#...###...#...#.###.....#.........#.###...#...#...#.......#.#...#...#.#...#.....#...#.#.........#...#...###...#.....#.#.#...#...#...###.#...#',
'#.#.#########.#.#######.###########.###.#.#####.###.#####.#.#.#.###.#.#.#############.#########.#######.#####.#####.#.#.#####.#.#.#.###.###.#',
'#.#...###...#.#.......#...........#.#...#.....#...#.#...#...#.#...#.#.#.............#.#.....###.#.......#...#.#.....#.#.......#...#...#.....#',
'#.###.###.#.#.#######.###########.#.#.#######.###.#.#.#.#####.###.#.#.#############.#.#.###.###.#.#######.#.#.#.#####.###############.#######',
'#...#.....#.#.....#...#...........#.#...#...#...#.#...#...#...#...#.#.#...###.....#.#.#...#...#.#...#...#.#.#.#.#...#.#.....#...#...#.......#',
'###.#######.#####.#.###.###########.###.#.#.###.#.#######.#.###.###.#.#.#.###.###.#.#.###.###.#.###.#.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#######.#',
'###...#...#.....#.#.###...........#.###...#...#.#.#.......#...#.###.#.#.#...#.#...#.#.....#...#.#...#.#.#.#.#.#...#...#...#...#...#.........#',
'#####.#.#.#####.#.#.#############.#.#########.#.#.#.#########.#.###.#.#.###.#.#.###.#######.###.#.###.#.#.#.#.###########.###################',
'#...#...#...#...#.#.#...#.....#...#.#.........#...#.###.....#.#.#...#.#.#...#.#...#.......#.....#.....#...#...#...#.....#.........#.....#...#',
'#.#.#######.#.###.#.#.#.#.###.#.###.#.#############.###.###.#.#.#.###.#.#.###.###.#######.#####################.#.#.###.#########.#.###.#.#.#',
'#.#.#...#...#.....#.#.#.#...#.#...#.#.........#...#...#...#.#.#.#...#...#...#...#.###...#...#.............#...#.#.#...#.#.........#.#...#.#.#',
'#.#.#.#.#.#########.#.#.###.#.###.#.#########.#.#.###.###.#.#.#.###.#######.###.#.###.#.###.#.###########.#.#.#.#.###.#.#.#########.#.###.#.#',
'#.#...#.#...#.....#...#.....#.....#.#...#...#...#...#.#...#.#.#.#...#.......#...#...#.#.#...#.#...###...#...#.#.#.#...#...###...#...#...#.#.#',
'#.#####.###.#.###.#################.#.#.#.#.#######.#.#.###.#.#.#.###.#######.#####.#.#.#.###.#.#.###.#.#####.#.#.#.#########.#.#.#####.#.#.#',
'#.....#.###...###...#.............#...#.#.#.....###.#.#.#...#.#.#.#...###...#...#...#.#.#...#...#...#.#.....#.#.#...#####...#.#.#.#...#.#.#.#',
'#####.#.###########.#.###########.#####.#.#####.###.#.#.#.###.#.#.#.#####.#.###.#.###.#.###.#######.#.#####.#.#.#########.#.#.#.#.#.#.#.#.#.#',
'#...#.#.#.........#...#.........#.#...#.#.#.....#...#...#...#.#.#.#...#...#.#...#...#.#...#.#.......#.#.....#...#.....#...#.#.#.#.#.#...#.#.#',
'#.#.#.#.#.#######.#####.#######.#.#.#.#.#.#.#####.#########.#.#.#.###.#.###.#.#####.#.###.#.#.#######.#.#########.###.#.###.#.#.#.#.#####.#.#',
'#.#...#.#.......#.#...#.......#.#...#.#...#...#...#...#.....#.#.#...#.#...#...#.....#.#...#.#.#.....#.#.#...#...#...#.#...#...#.#.#...###.#.#',
'#.#####.#######.#.#.#.#######.#.#####.#######.#.###.#.#.#####.#.###.#.###.#####.#####.#.###.#.#.###.#.#.#.#.#.#.###.#.###.#####.#.###.###.#.#',
'#.....#.###.....#...#.#...#...#.#...#.....#...#.#...#...#...#.#.#...#.#...#.....#...#.#.....#.#...#.#.#.#.#.#.#.#...#.....#.....#...#.....#.#',
'#####.#.###.#########.#.#.#.###.#.#.#####.#.###.#.#######.#.#.#.#.###.#.###.#####.#.#.#######.###.#.#.#.#.#.#.#.#.#########.#######.#######.#',
'#.....#.#...#.......#.#.#...#...#.#.#.....#...#.#.#...#...#...#.#.#...#...#.....#.#.#.......#.....#...#.#.#.#.#.#.#.........###...#.#.......#',
'#.#####.#.###.#####.#.#.#####.###.#.#.#######.#.#.#.#.#.#######.#.#.#####.#####.#.#.#######.###########.#.#.#.#.#.#.###########.#.#.#.#######',
'#.....#.#.....#.....#...#...#.###.#.#.....#...#.#.#.#.#.......#.#.#.#...#...#...#.#.###...#...#.........#.#.#.#.#.#.#...###...#.#.#.#.......#',
'#####.#.#######.#########.#.#.###.#.#####.#.###.#.#.#.#######.#.#.#.#.#.###.#.###.#.###.#.###.#.#########.#.#.#.#.#.#.#.###.#.#.#.#.#######.#',
'#.....#.........#.....#...#.#...#.#.....#.#.....#...#.#...#...#.#.#.#.#...#.#...#.#...#.#.#...#...#...###.#...#...#...#...#.#.#.#...#.......#',
'#.###############.###.#.###.###.#.#####.#.###########.#.#.#.###.#.#.#.###.#.###.#.###.#.#.#.#####.#.#.###.###############.#.#.#.#####.#######',
'#.#.....#.........###...###.#...#.....#.#.........#...#.#.#...#.#.#.#.#...#.#...#.#...#.#.#...#...#.#.#...#...#...#...#...#.#...#...#.......#',
'#.#.###.#.#################.#.#######.#.#########.#.###.#.###.#.#.#.#.#.###.#.###.#.###.#.###.#.###.#.#.###.#.#.#.#.#.#.###.#####.#.#######.#',
'#...#...#.###...#...#.......#.#...#...#.#...#.....#.#...#.#...#.#.#...#...#.#...#.#.#...#.#...#.#...#.#.#...#...#...#...#...#.....#...#...#.#',
'#####.###.###.#.#.#.#.#######.#.#.#.###.#.#.#.#####.#.###.#.###.#.#######.#.###.#.#.#.###.#.###.#.###.#.#.###############.###.#######.#.#.#.#',
'#...#.....#...#...#...#.....#.#.#.#...#.#.#.#.....#.#.#...#.#...#...#####.#.#...#.#.#.#...#.#...#.###.#.#.#...#...#...###...#.......#.#.#.#.#',
'#.#.#######.###########.###.#.#.#.###.#.#.#.#####.#.#.#.###.#.#####.#####.#.#.###.#.#.#.###.#.###.###.#.#.#.#.#.#.#.#.#####.#######.#.#.#.#.#',
'#.#.......#...#...#...#.#...#...#.....#...#...#...#...#...#.#.....#...#...#.#...#.#...#...#.#...#...#...#...#...#...#...###.#...#...#...#...#',
'#.#######.###.#.#.#.#.#.#.###################.#.#########.#.#####.###.#.###.###.#.#######.#.###.###.###################.###.#.#.#.###########',
'#...#...#.....#.#.#.#...#...#...#...........#.#.#...#.....#.....#...#.#...#.###.#.......#...###...#...#.................#...#.#.#.#...#...###',
'###.#.#.#######.#.#.#######.#.#.#.#########.#.#.#.#.#.#########.###.#.###.#.###.#######.#########.###.#.#################.###.#.#.#.#.#.#.###',
'###...#...#.....#...#.....#...#...#.........#.#...#.#...........#...#...#.#...#.#...#...#.........#...#...#...#...#...#...#...#.#...#.#.#...#',
'#########.#.#########.###.#########.#########.#####.#############.#####.#.###.#.#.#.#.###.#########.#####.#.#.#.#.#.#.#.###.###.#####.#.###.#',
'#...#...#...###.....#...#.#...#.....#.....###.......#.......###...#...#.#.#...#.#.#.#.###.....#...#.#...#...#...#...#...#...###.......#...#.#',
'#.#.#.#.#######.###.###.#.#.#.#.#####.###.###########.#####.###.###.#.#.#.#.###.#.#.#.#######.#.#.#.#.#.#################.###############.#.#',
'#.#...#...#...#.#...#...#...#...#...#.#...#...#...###.....#.....#...#.#.#...###.#.#.#.#.......#.#...#.#.#...#...#...#.....#...###...###...#.#',
'#.#######.#.#.#.#.###.###########.#.#.#.###.#.#.#.#######.#######.###.#.#######.#.#.#.#.#######.#####.#.#.#.#.#.#.#.#.#####.#.###.#.###.###.#',
'#.......#.#.#.#.#...#.......#.....#...#.....#...#.....###.....#...###.#.......#.#.#...#...#...#.#.....#.#.#.#.#...#.#.......#.....#.....#...#',
'#######.#.#.#.#.###.#######.#.#######################.#######.#.#####.#######.#.#.#######.#.#.#.#.#####.#.#.#.#####.#####################.###',
'###...#.#.#.#.#...#.#.......#.#...#.....#...#...#...#.#.......#.....#.#.....#.#...#...#...#.#.#.#.#...#...#.#...###.................#.....###',
'###.#.#.#.#.#.###.#.#.#######.#.#.#.###.#.#.#.#.#.#.#.#.###########.#.#.###.#.#####.#.#.###.#.#.#.#.#.#####.###.###################.#.#######',
'#...#...#...#...#.#.#.........#.#.#...#.#.#.#.#.#.#.#.#...#...#...#.#...###...#.....#.#...#.#...#...#.....#...#.#...#.......#.....#.#.......#',
'#.#############.#.#.###########.#.###.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###########.#####.###.#.#############.###.#.#.#.#.#####.#.###.#.#######.#',
'#.............#...#...#.....#...#.....#...#...#...#...#...#.#...#.#.........###.....#...#...#...#...#...#...#...#.#.#.#.....#.#...#.....#...#',
'#############.#######.#.###.#.#########################.###.#####.#########.#######.###.#####.#.#.#.#.#.###.#####.#.#.#.#####.#.#######.#.###',
'#...........#.......#.#...#...#.........#.............#.....###...#...#...#.#.......#...###...#...#...#.....#...#.#.#.#.......#.......#.#...#',
'#.#########.#######.#.###.#####.#######.#.###########.#########.###.#.#.#.#.#.#######.#####.#################.#.#.#.#.###############.#.###.#',
'#...#.....#.........#.....#...#.#.......#.#.....#.....#.........#...#.#.#...#...#...#.......#.................#...#...#...#...#.....#.#.....#',
'###.#.###.#################.#.#.#.#######.#.###.#.#####.#########.###.#.#######.#.#.#########.#########################.#.#.#.#.###.#.#######',
'###...###...#.....#...#...#.#.#.#.......#.#...#.#.....#.#.....#...#...#.#...#...#.#...#.....#.#.......#.........#...#...#...#.#...#...#.....#',
'###########.#.###.#.#.#.#.#.#.#.#######.#.###.#.#####.#.#.###.#.###.###.#.#.#.###.###.#.###.#.#.#####.#.#######.#.#.#.#######.###.#####.###.#',
'#...........#.#...#.#.#.#...#...###.....#.#...#.......#...###.#.###...#...#.#.....###.#.###...#.....#.#.....###...#...#...###.#...#...#.#...#',
'#.###########.#.###.#.#.###########.#####.#.#################.#.#####.#####.#########.#.###########.#.#####.###########.#.###.#.###.#.#.#.###',
'#...#...#...#.#...#.#.#.#...........#.....#.............#.....#.#...#.....#.###.......#.#.......#...#.......#.......###.#...#.#...#.#...#...#',
'###.#.#.#.#.#.###.#.#.#.#.###########.#################.#.#####.#.#.#####.#.###.#######.#.#####.#.###########.#####.###.###.#.###.#.#######.#',
'###...#...#...###...#...#.#...........#.................#.....#...#.....#.#.#...#...#...#.....#.#.............#...#...#...#.#.....#.#.......#',
'#########################.#.###########.#####################.#########.#.#.#.###.#.#.#######.#.###############.#.###.###.#.#######.#.#######',
'###...###.........#.....#...#...........#...#...#...#.......#...#...#...#...#.....#...#...#...#.........#.......#...#.....#.........#.......#',
'###.#.###.#######.#.###.#####.###########.#.#.#.#.#.#.#####.###.#.#.#.#################.#.#.###########.#.#########.#######################.#',
'#...#...#.......#.#.#...#...#.............#...#...#.#.#.....#...#.#.#.....#...###.......#...#.........#.#.....#...#.......#...#...........#.#',
'#.#####.#######.#.#.#.###.#.#######################.#.#.#####.###.#.#####.#.#.###.###########.#######.#.#####.#.#.#######.#.#.#.#########.#.#',
'#.....#.#...#...#...#.....#.................#.......#.#.....#.....#.......#.#.#...#.........#.###.....#.......#.#.....###...#...#...#...#...#',
'#####.#.#.#.#.#############################.#.#######.#####.###############.#.#.###.#######.#.###.#############.#####.###########.#.#.#.#####',
'#...#.#.#.#...#.......#...................#.#.###.....#.....#...###.....#...#.#.....###...#...#...#.............#...#.............#...#.....#',
'#.#.#.#.#.#####.#####.#.#################.#.#.###.#####.#####.#.###.###.#.###.#########.#.#####.###.#############.#.#######################.#',
'#.#.#.#.#.......#...#...#...#...........#.#.#.....#...#.#.....#.....#...#...#.....###...#.#...#.....#...#...#.....#...#...#...#...#.....#...#',
'#.#.#.#.#########.#.#####.#.#.#########.#.#.#######.#.#.#.###########.#####.#####.###.###.#.#.#######.#.#.#.#.#######.#.#.#.#.#.#.#.###.#.###',
'#.#.#.#.#.....#...#.###...#...#.......#.#.#.#.......#.#.#.........#...#...#.....#...#...#.#.#.........#...#...#.....#.#.#.#.#.#.#...###...###',
'#.#.#.#.#.###.#.###.###.#######.#####.#.#.#.#.#######.#.#########.#.###.#.#####.###.###.#.#.###################.###.#.#.#.#.#.#.#############',
'#.#.#.#.#...#.#.#...#...#...#...###...#...#.#.......#...#...#...#.#.....#...###...#.#...#.#...#...#...#.......#...#.#...#...#.#.........#...#',
'#.#.#.#.###.#.#.#.###.###.#.#.#####.#######.#######.#####.#.#.#.#.#########.#####.#.#.###.###.#.#.#.#.#.#####.###.#.#########.#########.#.#.#',
'#.#...#...#.#.#.#.#...#...#.#.#.....###...#.....#...#...#.#.#.#.#.......#...#...#.#...#...###...#...#.#.#.....#...#.........#.#.......#.#.#.#',
'#.#######.#.#.#.#.#.###.###.#.#.#######.#.#####.#.###.#.#.#.#.#.#######.#.###.#.#.#####.#############.#.#.#####.###########.#.#.#####.#.#.#.#',
'#...#...#...#...#...#...###.#.#.#.......#.....#.#.#...#.#.#.#.#.#...#...#.....#...#.....###...........#.#.......#...#.......#...#...#.#...#.#',
'###.#.#.#############.#####.#.#.#.###########.#.#.#.###.#.#.#.#.#.#.#.#############.#######.###########.#########.#.#.###########.#.#.#####.#',
'#...#.#.#.....#...#...#...#...#...#...#.......#...#.#...#.#.#.#.#.#.#.....#.......#.#.....#.#...........#.........#...#...#...###.#.#...#...#',
'#.###.#.#.###.#.#.#.###.#.#########.#.#.###########.#.###.#.#.#.#.#.#####.#.#####.#.#.###.#.#.###########.#############.#.#.#.###.#.###.#.###',
'#.....#.#...#.#.#.#.###.#...#...#...#...#.......###.#.#...#...#.#.#.....#...#...#.#.#.#...#...###...###...#.......#...#.#...#.....#...#...###',
'#######.###.#.#.#.#.###.###.#.#.#.#######.#####.###.#.#.#######.#.#####.#####.#.#.#.#.#.#########.#.###.###.#####.#.#.#.#############.#######',
'#.......#...#.#.#...#...#...#.#.#...#...#.#...#...#.#.#.......#.#.#.....#...#.#.#.#.#.#.....###...#...#.....#...#...#...#...#.........#...###',
'#.#######.###.#.#####.###.###.#.###.#.#.#.#.#.###.#.#.#######.#.#.#.#####.#.#.#.#.#.#.#####.###.#####.#######.#.#########.#.#.#########.#.###',
'#.....#...#...#.....#...#.....#.....#.#.#...#.#...#.#.#.....#.#.#.#...#...#...#.#.#...#.....#...#...#.###.....#...........#.#...........#...#',
'#####.#.###.#######.###.#############.#.#####.#.###.#.#.###.#.#.#.###.#.#######.#.#####.#####.###.#.#.###.#################.###############.#',
'###...#...#...#.....###...#...........#...###.#.###.#.#...#.#.#...#...#.....#...#...#...#...#...#.#...#...#...#...........#.#.........#.....#',
'###.#####.###.#.#########.#.#############.###.#.###.#.###.#.#.#####.#######.#.#####.#.###.#.###.#.#####.###.#.#.#########.#.#.#######.#.#####',
'#...#.....###.#.#.........#.#...........#.#...#.....#...#.#.#.....#.#...#...#.......#.#...#...#.#.....#.....#.#.#.........#...#...###.#.....#',
'#.###.#######.#.#.#########.#.#########.#.#.###########.#.#.#####.#.#.#.#.###########.#.#####.#.#####.#######.#.#.#############.#.###.#####.#',
'#...#.......#.#.#.#.......#.#...#...###...#...#.........#.#.#...#.#.#.#.#...#.........#.....#.#...#...###...#...#...#...###...#.#.#...#...#.#',
'###.#######.#.#.#.#.#####.#.###.#.#.#########.#.#########.#.#.#.#.#.#.#.###.#.#############.#.###.#.#####.#.#######.#.#.###.#.#.#.#.###.#.#.#',
'#...#...#...#.#.#...#.....#...#...#.#...#...#.#.#...#...#.#.#.#...#.#.#...#.#.....#########.#.#...#...#...#...#...#...#...#.#.#.#.#.....#...#',
'#.###.#.#.###.#.#####.#######.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#####.#.###.#.#####.#########.#.#.#####.#.#####.#.#.#######.#.#.#.#.###########',
'#.....#.#...#...###...#.....#.#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.....#...#.#.....#.#########.#.#...#...#.....#...#.#.....#...#...#.###.......#',
'#######.###.#######.###.###.#.#.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#######.#.#####.#.#########.#.###.#.#######.#####.#.###.#########.###.#####.#',
'###...#.....#...#...#...#...#.#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.#...#...#.#.....#.#########.#.#...#...#...#.....#...###.........#...#.#.....#',
'###.#.#######.#.#.###.###.###.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#####.#########.#.#.#####.#.#.#####.###############.###.#.#.#####',
'#...#.........#.#.....###.....#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.#...#...#########.#.#.....#.#.#.......#...........###...#...#.#...#',
'#.#############.###############.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.###.#.###########.#.#####.#.#.#########.#########.#####.#####.#.#.#',
'#.#...#...#...#.........###...#.....#.#.#.#.#.#...#.#.#.#.#.#.#.#.#.#...#...#.#.###########.#...#...#.#...........#.....#...#...#.....#...#.#',
'#.#.#.#.#.#.#.#########.###.#.#####.#.#.#.#.#.#####.#.#.#.#.#.#.#.#.###.###.#.#.###########.###.#.###.#############.###.#.###.#.#####.#####.#',
'#.#.#.#.#...#...#.....#.....#.......#.#.#.#.#.....#.#.#.#.#.#.#.#.#...#...#.#.#.#########...#...#...#.#...#.......#...#...#...#...#...#...#.#',
'#.#.#.#.#######.#.###.###############.#.#.#.#####.#.#.#.#.#.#.#.#.###.###.#.#.#.#########.###.#####.#.#.#.#.#####.###.#####.#####.#.###.#.#.#',
'#.#.#...###.....#.###...#...#...#...#.#.#.#...#...#.#.#...#.#.#.#.#...#...#.#.#.#########.#...#...#.#.#.#.#.....#...#.......#.....#.....#.#.#',
'#.#.#######.#####.#####.#.#.#.#.#.#.#.#.#.###.#.###.#.#####.#.#.#.#.###.###.#.#.#########.#.###.#.#.#.#.#.#####.###.#########.###########.#.#',
'#.#.#.......#.....#...#...#...#.#.#.#.#.#.#...#...#...#.....#.#.#.#...#...#...#...#######.#.....#.#.#.#.#.#...#.#...#.......#.......#...#...#',
'#.#.#.#######.#####.#.#########.#.#.#.#.#.#.#####.#####.#####.#.#.###.###.#######.#######.#######.#.#.#.#.#.#.#.#.###.#####.#######.#.#.#####',
'#...#...#...#.#.....#.#.........#.#.#.#.#.#.....#.....#.....#.#...#...#...#.......#######.#.......#.#.#.#...#.#.#...#.....#.#.....#...#.....#',
'#######.#.#.#.#.#####.#.#########.#.#.#.#.#####.#####.#####.#.#####.###.###.#############.#.#######.#.#.#####.#.###.#####.#.#.###.#########.#',
'###...#...#...#.....#.#.........#.#...#.#.#.....#.....#.....#...###.....#...#..E#########.#.#.....#.#.#.....#...###.#...#.#.#...#...........#',
'###.#.#############.#.#########.#.#####.#.#.#####.#####.#######.#########.###.###########.#.#.###.#.#.#####.#######.#.#.#.#.###.#############',
'#...#...#.........#.#...........#...###.#.#.....#.....#...#...#.........#...#...#########.#.#.#...#.#.#.....###.....#.#...#...#.............#',
'#.#####.#.#######.#.###############.###.#.#####.#####.###.#.#.#########.###.###.#########.#.#.#.###.#.#.#######.#####.#######.#############.#',
'#...#...#.......#...#...#...#.....#...#...#.....#.....###.#.#...#...#...#...#...#######...#.#.#...#.#.#...#...#.#...#.......#...#...#.....#.#',
'###.#.#########.#####.#.#.#.#.###.###.#####.#####.#######.#.###.#.#.#.###.###.#########.###.#.###.#.#.###.#.#.#.#.#.#######.###.#.#.#.###.#.#',
'#...#.#.........#...#.#.#.#.#.###...#...#...#...#...#.....#...#...#.#...#...#.#########.###...#...#.#.#...#.#.#...#.#.....#.###.#.#.#...#.#.#',
'#.###.#.#########.#.#.#.#.#.#.#####.###.#.###.#.###.#.#######.#####.###.###.#.#########.#######.###.#.#.###.#.#####.#.###.#.###.#.#.###.#.#.#',
'#...#...#...#.....#.#.#...#.#.....#.#...#...#.#.#...#...#...#.....#.#...#...#.......###.......#...#.#.#.....#...#...#...#...#...#.#.#...#...#',
'###.#####.#.#.#####.#.#####.#####.#.#.#####.#.#.#.#####.#.#.#####.#.#.###.#########.#########.###.#.#.#########.#.#####.#####.###.#.#.#######',
'#...#.....#.#.#.....#.#.....#.....#.#.#...#...#.#...#...#.#.#.....#.#.###.#.....#...#######...#...#.#...#.....#.#...#...#...#.#...#.#.......#',
'#.###.#####.#.#.#####.#.#####.#####.#.#.#.#####.###.#.###.#.#.#####.#.###.#.###.#.#########.###.###.###.#.###.#.###.#.###.#.#.#.###.#######.#',
'#.#...#.....#.#...#...#.....#.....#...#.#.......#...#...#.#.#.....#.#.#...#...#.#...#######...#.#...###.#...#.#.#...#.....#.#...###...#.....#',
'#.#.###.#####.###.#.#######.#####.#####.#########.#####.#.#.#####.#.#.#.#####.#.###.#########.#.#.#####.###.#.#.#.#########.#########.#.#####',
'#.#...#...#...#...#.#.......#...#.#...#.#.....#...#...#...#...#...#...#...#...#.#...#######...#.#.....#...#.#.#.#...#.....#.....#####.#.....#',
'#.###.###.#.###.###.#.#######.#.#.#.#.#.#.###.#.###.#.#######.#.#########.#.###.#.#########.###.#####.###.#.#.#.###.#.###.#####.#####.#####.#',
'#.#...###.#...#...#.#.#...#...#.#.#.#...#.#...#.###.#.#.......#.....###...#.#...#.....###...###...#...###...#...###.#...#.#...#...#...#...#.#',
'#.#.#####.###.###.#.#.#.#.#.###.#.#.#####.#.###.###.#.#.###########.###.###.#.#######.###.#######.#.###############.###.#.#.#.###.#.###.#.#.#',
'#.#...#...#...#...#.#.#.#.#.#...#.#.#...#.#.#...#...#...#.....#...#.#...#...#.#...#...###.....#...#.#...............#...#.#.#...#.#...#.#.#.#',
'#.###.#.###.###.###.#.#.#.#.#.###.#.#.#.#.#.#.###.#######.###.#.#.#.#.###.###.#.#.#.#########.#.###.#.###############.###.#.###.#.###.#.#.#.#',
'#.....#.....###.....#...#...#.....#...#...#...###.........###...#...#.....###...#...###S......#.....#.................###...###...###...#...#',
'#############################################################################################################################################',
];

// mapInput = [
// '###############',
// '#...#...#.....#',
// '#.#.#.#.#.###.#',
// '#S#...#.#.#...#',
// '#######.#.#.###',
// '#######.#.#...#',
// '#######.#.###.#',
// '###..E#...#...#',
// '###.#######.###',
// '#...###...#...#',
// '#.#####.#.###.#',
// '#.#...#.#.#...#',
// '#.#.#.#.#.#.###',
// '#...#...#...###',
// '###############',
// ];

const directions = {
  '>': [0, 1],
  '^': [-1, 0],
  'v': [1, 0],
  '<': [0, -1],
}

const goingBack = {
  '^': 'v',
  'v': '^',
  '>': '<',
  '<': '>',
}

let start = null;
let finish = null;
let scores = {};
const limit = 20;
const gain = 100;
const cheatsList = {}



const map = mapInput.map((a, y) => a.split(''));
// console.log(map);

map.forEach((line, y) => {
  line.forEach((val, x ) => {
    if(val === 'S') {
      start = [y , x];
    }
    if(val === 'E') {
      finish = [y , x];
    }
  });
})
let path = {};
let minimumScore = 0;

const move = async (position, direction, stack = {}) => {
  let y = position[0];
  let x = position[1];
  let current = '>';
  let count = 0;
  while(map?.[y]?.[x] !== 'E') {
    count++;
    // Do not make turns if possible - follow current line
    // Always try to not change direction first  | this will help find the right path quicker and reduces complexity
    let heading = directions[direction];
    let nextPosition = [y + heading[0], x + heading[1]];
    if((map?.[nextPosition[0]]?.[nextPosition[1]] === '.'  || map?.[nextPosition[0]]?.[nextPosition[1]] === 'E') && !stack[nextPosition[0] + ',' + nextPosition[1]]) {
      // console.log(nextPosition);
      y = y + heading[0];
      x = x + heading[1]
      stack = {...stack, [y + ',' + x]: direction}
    }

    // Change direction
    for(let d in directions)  {
      if(d !== goingBack[direction] && d !== direction) { // not going back and front, only turn right or left
        let heading = directions[d];
        let nextPosition = [y + heading[0], x + heading[1]];
        if((map?.[nextPosition[0]]?.[nextPosition[1]] === '.' || map?.[nextPosition[0]]?.[nextPosition[1]] === 'E') && !stack[nextPosition[0] + ',' + nextPosition[1]]) {
          y = y + heading[0];
          x = x + heading[1]
          direction = d;
          stack = {...stack, [y + ',' + x]: direction}
        }
      }
    }
  }

  render(map, stack);

  if(map?.[y]?.[x] === 'E') {
    const newStack = {...stack, [y + ',' + x]: direction};
    render(map, stack);
    path = stack;
  }

  return stack;
}


const render = (arr, existing = {}, cheats = {}) => {
  for(let j = 0; j < arr.length; j++) {
    let str = '';
    for(let i = 0; i < arr[0].length; i++) {
      if(cheats[j + ',' + i]) {
        str += cheats[j + ',' + i][0].i;
        // str += 'O';
      }else if(existing[j + ',' + i] && arr[j][i] !== 'S' && arr[j][i] !== 'E') {
        // str += existing[j + ',' + i];
        str += "+";
      }else{
        str += arr[j][i];
      }
    }
    console.log(str)
  }
  console.log('    ');
}

render(map);

let route = {};
move(start, '>', {[start[0] + ',' + start[1]]: '>'}).then(() => {
  console.log("final: ", Object.keys(path).length);
  render(map, path);
  route = path;
  const points = Object.keys(path);
  console.log(points);
  let saved = {};
  let total = 0;
  points.forEach((point, k) => {
    const [y, x] = point.split(',').map(a => parseInt(a));
    const possibleOptions = points.slice(k + gain);
    if(possibleOptions && possibleOptions.length) {
      possibleOptions.forEach(cheatPoint => {
        const [cy, cx] = cheatPoint.split(',').map(a => parseInt(a));
        const distanceUsed = Math.abs(cy - y) + Math.abs(cx - x);
        const picosecondsSaved = points.slice(k).indexOf(cheatPoint) - distanceUsed;
        if(distanceUsed <= limit && picosecondsSaved >= gain ){
          if(!saved[picosecondsSaved]) {
            saved[picosecondsSaved] = 0;
          }

          saved[picosecondsSaved]++;
          total++;
        }
      });
    }
  });

  console.log({saved});
  console.log(total);
  console.timeEnd('run:');
});
