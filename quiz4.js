const rawData = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX'
]
// const rawData = [
// 'MMAMMMSAXAXXAXMASMMASAMXMAMMAMXXXXXSMSXMMMXMXXSXASAMXMAMMXSAMXXXXMSSMXMASMMMSMSSSSSXMXSASMSMMMMMXAMXAXMMSMMAXSSSXSXMXAMXMXSXSMSSXSAMXXXMXMXM',
// 'ASASAAMXMXMMMXAXAXSSMXSASASMSSXMMSMMSAMXMMSSMASAMXMXMMMSMMMASMXSAMAMMXMAMAAXAAXAAAAMMSAMXAAXAASMSSSMSSSMAAMXMAAXMMASMSSMMXMAXAAAASAMXSXMASAM',
// 'MSASMSSMMAAASMXSMMXAAMSAMASAAAMAAAASXMAXSAAAMSMMXAMAMAMAXAXAXAASMMAMMXMASXMSMSMMMMMAXMASMXMSXXMAAXAAAAASXMMAAMSMMSAMXAAXXAMXMMMSMSASAAASASXS',
// 'MMAMAXMASMSXXMASXMMMMMMMMMMMMXAXSMXMAMXXMMSSMMAMMAXXSASXSXMAMMMMXSMSMXXAMAASAMMXMASXXXXSXMMXMSMMMSMMMSMMSASMMXAAXAASMSMMSXSAXAAMXSAMMSMMASAA',
// 'MMMMXMSXMXXAAMAMASXMAAAXAMXAASMMMXMSXMSXMXAAASAMSSXAXAXAAMXMXSASMMAAAMMMSSMMAMSXSAXMAMMMXAAAAAAAXXAAXAAXSXMASMSSMSXMAAXMAMMASMXXAMXMXAXMXMMM',
// 'ASAXMAMAMASXXMASAMASXSSSMSSMXSAASAMXAMMAMMSSMMXMAMXMMSMMMSSMAXXMAMSMSAAXMXASXMSASMSMAMAAMSSSSSMMMSSMSMXMXXXMXAAMAXMSMSXMASXAMXAMSMMXSMXSAXMX',
// 'XMASXSSXMASMSSXMASXMMMAAAAAXXSMMMMMSAMSSMAMMAMMMASXXAAAXXAAMXMMSSMAMXXSSMSXMXXMAMAAMSXXXMAMMAMXMAXMAXAASMSXSMMMMSXMAAMMSAMMMSXMXMASXMXAXMMSA',
// 'XSXAAXXXMMXAAXAXAMXXAMMMMMSAMXMXXMASAMAMMMMMAMAMAMXMSSSMMSXMAAMAMXXSAMXAAMXMASMSMSMXXAASMSSMAMSMSSMAMSMMAAASMXAAXMSMSMAMASMAMMSASXMASMXXMAXA',
// 'MMXMSMAMXSMMMSSMASASXSASXSAMXAMMMMASMMAXAASMMSXMASXMAMXXXMASXSMAXXMMMMSMMMAXMASAAXSAMXMXXMAMXXAAMXMXMMAMMMXMXMMXSASMMMMSAMMAXAXASMXMXAMSMSXS',
// 'SXXAAAXMAXASXAMMXMMAASASMAAMMXMAAXXXXSXSSXXAAAMSAMXMSXXMASAMAMMSSMXAAXAMASAMMMSMMMMXSSMXSSSMMSMSMMXSSSMMSMMSAMSMMMMSXAAMASXSXSMAMMMSMSMMAXAA',
// 'MXMAMSSSXSMMMMSSMXAMXMAMAXMSAXSSMMMMXAMXMASXMMMXAXXXXMASAMAMXMAMMAMSXSAMAXMXSAMAAAXAMAMXXMAAMAMXMAAMASXAAAASMSASMAXXMMXSAMAMAXMAMASMAAXMAMSM',
// 'MSXSMAAMMSAASAAMMSSMMMMMSAAMMMXXAAAXSAMMMAMMASXMXMMXSAMXASMMSMMSMSXMASAMSSMAMASXMMMXXMMMMSSMMAMSMSSMAMMSSXMXXSMSXSXSXSMSMMAMMMSMSXSASMSMMMXX',
// 'MAAXMMSMASMMMMMSAAAXAAAMAMXMXAAMSSSXXAMAMXMSAMMXSXMASMSMMMMAXXMAMMAMAMAXAAMXSAMASXAMXXSAAAAAMAMAAMXMASXAMAXXXMMSAMASAXAMXMSSXXAMAMXAMMXMMMMM',
// 'MMSMAAXMASAXXXAMMSSSSSXSXSAXMMSMAAMASMMSXSMMAXSAMASMSXAAMAMXMMMMXSAMXSXMSSMAMASAMMXSAAMMSSSMSSSMSMXSAMMAMXMXMSAMAMXMMMMMAXMAMMASXSMSMXMMAAAA',
// 'XSMXMMSMMSMMMMMSXAXAAAASAMXSMAMMMSMMXAAXAXXMMXMASAMAXXMSMSSSMXSAASAMXMXAXAMXMAMAMAAMMSMAMAMAAAXXAXAMXSMMSMSAAAMMMMAAAAAMAMMAMSMMASAXAASMSSSS',
// 'XMASMXXAMXAASMMMMMMMMXMMAMSXMASXXAAXSMMMMMSSMXSAMXSAMXXMAMAAAAMMXMMMMSASMMMSMSSSMMXSAAMXMAMMMXMMSSSSMSXAAASMSMXASMSSSSSXSASAMMAAMMSMMMSAAAAX',
// 'XMAMMMSXMSSMSAAMAXXXASXMAMXAMXSXSMSMXMASAAXAMXMMSMMMAXXMAMSMMMMSSSMAAMXXAAAMXMAMMXAMMSXSSXMXMASAMAAXAXMSMXMXMXSMSAAAAMAAXMSXSMMXXAAMAMMMMMMM',
// 'XMASAAXAXMAMSXMMMXMXMXMSMSSSMXXXMXMXXSXSMSXSMMSAAAAXSMMSAMMXMXXAAAMMXSASXMMSSMSMSMMSAXAMXASMMAXAMMMMSMAAXSXMMMMXMMMMMMMMMXSAMXXMMSMSASXSXSXS',
// 'XSASMSSMMSAXSAMXSSMMXMAAAXAMAMAMXMXMMAMXAAXMAMMSSSMSXAASASXAXSMMSMMMXMASMMXMMAAXAMXMASAXSMMAMSSMMAMAAMXMMAXMASAMXXXAXMAMSAMAMSXXAMMXASAMASAX',
// 'XMASXAAAASAMXAMASAAXAMSMSMSMAAAAASASXXSMMMMSAMAAXMXXMSXSXMXMXXAAXAAAAMSMAXSAMSMSMMXAAMAMXXMSMAAASXSSXXMXXMMSASMAMMSXSAMXMXSAMXXMASAMSMMMXMAS',
// 'XMMSMXXMMMAXXXMXSAAMMMMAAXXSMMXSASASMMMMMSXSSMMSMSMSAXXSMMAMXSMMSSMMMXMXAMSAMXXSXASMMSAMXMXAMSSMMMAXXMSMSXAMXSMASMAXAMAAXMSASMSXAMAXMAAXXMAM',
// 'MMAXAXXSAMMSMASMMMMSXAMSMMMASAAMAMXMAMAAMMAMMSAAAAAAXSMMMSAMMMAMXAMXSASMSXXAMMXMMMMAAAASMMMAXAXAAAAMXXAAMMXXAXMAMMSMSAMXXXXAXAXMAXMMXSMSMMAS',
// 'SMSMSAASASAAXAXXAAAXMSMMAMSAMMSMSMASXMMSXMAMAMSXSMSMSMAAXSMSASASAMXXSASAMXSSMMSAASMMMSASAASMMMSSMMAAASMSMMSMXSMSSMXAMAXMASMSMSMSMMSSMAAAMSAM',
// 'XAAAAMMSAMMMMMSSSMMSAMMXAMMAMXXAXXXSXMSAXSAMXXMMMXAXAXXMXXAMXSAMMSAXMAMXMMMMAMAXAMAAXXAMMMXMAXXMSSXXMAMXAAXMASXAAMMMMAAXMMAAAAMXAAAAMMSMXMXS',
// 'MMMSMXXMXMAXAAXXASAMXSAMSXSAXAMXMXXMASMAXSAMMSAAXSXSMSMXMMXMXMMMASMXMAMAMAAXAMMMSMSMMMSMAAMSMMMAMMMXMAMMAMXXAMASMMSSSXSMSMSMSMSSMMSSXAAMASMA',
// 'MXXMXSXMASMSSMMSXMXSAMMXXASASXMSMMSMSMMXMMAMAMMSXMXMXMXAAXXXAAAMAMSASASASMSSMMXAMAAAXXXXMMXAAAMAMMAAXMMSSSMMMSAMXAAAMAMAAMXMXMMAXAXAMMSSMSAM',
// 'MMMAASXSASAAAAMAMXXMMXXAMXMMMXAMXAMSAAAASXMMXXAMASAXAASMSMMSMSMMAMSXSMSMSMMAXXMASASMMMMXMMSMSMSSSMSXSAAAAAXAAMXSXMMXMAMXMMAMXASMMSSMXMAAAXXM',
// 'XAXMASAMASMSMXMXAMMMMSSMMMXXAMMMMXSAMMSXSASXSMXXASMMMMMXMAMMXAXSMMSASXSMSMSAMXMXAMXAAAAASXMAXXXAAAAASMMXSMMSXSASXXXXMAMAAMMMSAMXXXMMMMSSMMSS',
// 'SSXSAMMMXSAMXAMMSASXAAMXXAXMMXSAAXMMXAMMSMMAMMSMMMMSMSXSXSMSMMMAXAMSXAXXSXMASXXSAMXSXMSMMAMAMAMXMMMXXXXMMXXXAMASXMAMSAMSSXSAMASMMXAAAXMXMSAM',
// 'SAAMXSXXAMAMSXMAXXMMMXMAXSMAXAXAXSSXMMSASAMSMAXAMXSAAMAMAMAMAXMXMXSMMSMMMASAMMASXMAMXMXASMMMSXSASAMMMMMAMXSSXMAMAMAXMMXAAMMASAAXAXSSSXSAMMAS',
// 'MMMMMMXSMMSMMXMMSAXSAXMSMXASMSMSAAMAMXMASAMXMXSAMXSMSMSMSMAMSXMXSMXXAAAAMMMMSXAXMMAMASMAAXAMMASAXAXSASXSMAXMAMXSXMXSAXMMMMSXMASXXXAMAXMAMSAM',
// 'XXAAAMXMXAAAXMSAXXMMXSAMAMXMAAAXMMMXXASXSAMXMASAXMXMAMXAMSAMMXSAMMSSSSSMXSAMXMMSXASXAXMXMMXSMMMSSSMMXMAMMXMSAMXSXSMMMMXXMAMASMMASMMMSMSAMMAS',
// 'SSSMSSXMASXSMAMMSMXMAAXMAMAMMMMMXMSAMXSAMXMAMXSAMAAXXAMAMXMSXAMASAAMXMAAMXAMXAAXMAXMSMMSSMMSASAMXXMASMSMMMMSMSASMSXAAXMMMXMAMXMAMAXAXXSXXSAM',
// 'MAXXMAXXAMAAXSXAAAAMMSXSXMXSXSASAMXAMAMAMMSMSMSXSSSSSMSMMXMAMASAMMMMXSMMMSSMSMXSXXMAXAXAAAXSAMASXMMAXAAMXAAMMMMSAXMSMXSAMXMSSSMSSSMMSXXAAMMS',
// 'MAMMMMMMMXSXMMMSXSASAMASXSXAAXXSAMSAMAXAMAAAAAMAMAMAMXMMSAMMMAMAMSASMXMXAMAAXMASMMSMSMMSSMMMXMAMAASAMXMSSMXMAASMMMAXXASASAMAAXAAMAMXSMMMXMAS',
// 'MMSSXAXAMMMMAMMAMMMMAMSMASMMXMASAMSXMSSMSSMSMSMAMSMSMMSASASXMSSSMMAMAAAMSSMMMMAMAXAMAAAXAMXSASXSXMMMSSMAXAASMXSASMSMMMSAMAMMMMXMXAMMMAXXAMAS',
// 'AAAMXMSMSAMMAAMASAMXASAMAMMMMSMMMMMSAXAMAAAMXMMMXXAXAMMXSXMAMMAXSMXMSMMXMAMXMMMSSSMSSMMSAMXMASAMMSAMAAMMXSAMXAMAAAAXSXMMSXMMXMMSSSSSSXMAXSAM',
// 'SMMSXMAASMSSSSSSSXSSMXAMMSMAMAAMXSAMXMAMXMMMAXXSMMAMAMMXMMSSXMAMXXMAMAXMSAMMXAXAAAXAAAMXAXXMMMAMASASMXMAAMAXAXMXMSMSMXMAXAMXAXAXAXAXMAXMASAM',
// 'XAAMASMMMXMAAAXAXAXXMMAMAAMAMSXMAMMXSMXMSSSMMSAAAMSSSMXSAMAAMMASXSXMMSMAXAMMSASMSAMXMMASXMMAAXXMXSAMXAMMASMMMMSMXXMMMAMXSSSSMSSMMMMMXMASASAM',
// 'SMMSXMMMMSMMSMMSMMMASMSMSSSMMXAMSXSASAAXAASAMMMMXAAAAMASAMMXASASXMASAASXSXMASAXAAXXAMXMAAAASAMMXXXAMXXMMAMXAAMAMMSMASXMXAMXAAAXAXXXSMAXMASMM',
// 'MMMXMSMAAXAAMXMAAAMXMAAAMAXMASMMMAMASMAMMSMXMAXXMMMSMMMMAMXXXMXSASAMXMAXXAAAMMMSMSSSSXXMMMMXAMXMMSXMXSXMASMSXSASAXMASMMXSXXMMMSSMMSAMSSMMMMX',
// 'XXMAMAMMSSMMXAXSSMASMSMMMMMMXSXAMMMAMXAMXAMAMXSXXMAXAMSSSMMSXMSSMMASMSMSSXMAMMXXAXAAXXAXXSAMXXAXXAASAMAMAXXAASMMXXMMSASAMAXSXAAAAMSAMAMAMASM',
// 'MASASMXSAXAMSMMMAMAXMAMXASXSAMAMMAMXSXMMMASXMSAMXMAMAMMAMAXSAMASASMMAMXAAAMXMXMMSMMSMMXMASXMMSSSXSSMASAMSSMMMMXAAXSAMMMASAAMAMSSSMSAMXSAMSXA',
// 'AMSAMAXMASXMASASAMXSMSXSMMAMXSAMMASAXAMXMMXMXXMASMXSSMSAMXMMAMASMMMMAMMXSMMASAASXAXAAXASAMAAAXAMXMXMXMMSAAXMAXMMSXXAMMSAMMMXMMAXAASAMXSXSAMS',
// 'SXMAMSMMAMASASMSXXXXAMMXMMSMMSMSXMMASMMSAXAMMAMXSXAMAASXSMSMXMAXAAXXMSMMMAXAXMXSXSMMXXXMASMMSMMMASAMASXMMSMSMMSAMMSXMAMXSXSSXMXSXMMXXMMMMMAX',
// 'MSSSXMAMXMASXMASAXSMMMAXSAMAAXASMMMMMXASXSMSAXSMSMXSMMMAXAAXSSSSSMMSAMXAXAMXSXMSAMASMSXSAMXXXAXXXMASASASAMXXSAMAAMXMMMMMXMAMASXMAASMMAAXSXSX',
// 'XAXMASXMAMAMAMMMXXXAAMMMMASMSMAMASAMMMXMASAXMSXASMAXXAMXMMMSMAAXMAMMASMXSAMSAMXMAMAMAAAMAMSSSSMMMXAMXSXMASASMXXSMMASXXSMAMMSMMASMMAAXXAMSAMX',
// 'MMMMXMXMMMSSXMXMMMSSMSAASAMMXMASXMAAAMAMMMMMXMMMMMAMMSAMXASMMMMMXMASAMAXSAMMMSAMXMSMMMMMAXAAAMAAMMMSMSASAMMMSSXXAMAMAAASAXXMXSXXMSSSMMSAMXMX',
// 'SXSXSSSMSAAMMSAMXAXMAMXMMMMXAXMMMSXMASXSXMASAMAAAMMSMAMASXMAAXAAXAAAMMMMSSMMMSASXAXAASASMMMSMSXSXSMAASXMXMXSAMXSMMMXMSMSMSASAMXXMAAAXXXMMXSM',
// 'SAAXMASAMMXSAMASASXMMSMMASMSXSASASASXXXAMXMMAMSMXMAAAXMMAASXMSSSSMSMXAXASXSAAMSMMSXSMSAXAAAXXSXMASAMXMMMAXMMMSMMMSXMXMAXMAMMASXMMMSMMMSAMAXA',
// 'MXMASAMXMAXMXSAMXXAMAAAMAMXAXSAMASAMXMSSSXXSSMXAMMSSXMMXMXAMXXAAXAAMSSSMSASMSSXXAMXMMSXSXMMSAMAMSMXMAXASMXSAMAAXAAASMMMMMMASMMXAXAAXMASAMXSS',
// 'XMXAMASXMXSAASXSXSAMSSSMSSMMMMAMMMXMMAAMAMXXMAMAMXMMMAXXXSMSMMMMMSMMAAMXMAMAXAXMASXMASMSAXAMAMAMAXAXXXMXMASASMSSMSXMAAAAAMMXASMSMXSASXSAMXAM',
// 'MAMXXAMXAAMMXMAMXMMMXAXXMAXXXSAMAAAMAMXSASXMMAMAMAASXSMSAMXAAXXXAXXMMSMAMMMSMMMSMMMMAMASAMMSMMMSMSSSSMAMMASAMAAAMXXSSMSSSSXSAMXXASXAXASXMMMA',
// 'SAMSSMMXMXMAAMAMAMXSMMMMSAMMMSASMSSSSXXMASAMSMSSMMMMAXAXMMSSSMMMMMMSAXMXSAAMAXAAXMSMASXSSMAAXAAAXMMAAAMXSASAMMMMMMMMAAMMMMMMXXMMMMSMMMMMXSAM',
// 'MASAAAAXMASXMXAXXSAMASAXMAXAMSAMXMAMXXMMMSAMXXMAMSMMAMMMMMAMAMXASAAMAXAMXMSSSMSMSAAXAMMXAMXSSMSXSAMSMMXMMASAMXSSMASMMMMAAMXAAXSSMAAXXMASASAX',
// 'XSMXSMMMMASAASXSMMAXAXSXMASXXXXMASAMXMXAAMAMXMASXSAMXXAASMSSSXSASMSMSMSMSAMXAAAAMMMMMMSSMMAMAMMMMMXMMXSSMMMMMMMASXXAAMXSMSMMSMAAMSMXMSXMASMM',
// 'XAAXMMXAMASMMMMAMXAMXSMXMAMXAAMSXSXSAAMMMSAMXSMMAMMMMSMMSAAXAASAMXMAMXXSXXMXMMMXMASXXAAAXXSSSMSAASAMSAXMASAMXAMAMXSSMSAMXAMAAMSMMAXAMXMMXMAS',
// 'XSAMXSSSSXMMMSSSMSMSMAAASMSSXSXAXMXSMSAAAMXSASMMAMXXXAXMMMMMMMMSMAMAMAMMMASXXSXXMASAMXSAMSAAXASMMXAMMMXSAMXSSSSXMAMXAMXMSMSSMMMMSMSXSAMSMMAM',
// 'AXXMXMAMAMXAAXXMAAAAMMMMSAAXAMAMSXAXAXMMMMAMMSASXSSMSXMAXAXAMXAAMXSAMAXASAMAXMASMASMMXMASXMMMMMMSSSMAAMXSMXMXMAMMXSMSMSMXXAXAMSAAASMSMMAAMAS',
// 'XSMSAMXMASMMSSMMSMSMSXSAMXMMXMAMMMMSMMSXSMMSAXMMMAMAMSSSSMSSMMSSSMMXSXSMMASMXSASMAMXMXMSMXXAASAMMAASMXSMMXAMAMMMSMMAMAXXMMMSMMMMMMMAMASMSSSS',
// 'SMASXSASXSXXAAMAAXAMXXMXAASXSSSSXAXAAAXAXAXMMMMAMAMSXAXMAXSAAAXMMMSMMXAAMXMAAMASMSXMAMXMAMSSXSASMSMMMASAMSXXASXAXAMAMSMMAAXAXXAMMSMSMAMXXMAS',
// 'XMMMXMMMMMMMMSMSSSMSMSXMAMXAXAMMMSMMSMMMMMMMMASAMAMAMMSSMMSXMSXSAMXAMMSSMAMSMMAMMAAASMSMAMXXASAMAAXAMAXAMASMXSASMSMMSAMAXSMMXSXSAAAXMAXXSMXS',
// 'MSAMXMAAXAAAXXXXAMMAMMAMSSMMMMMMAMAAMXSMAMXMSMSASMSMAXMXMAMAXMAMXMSAMMAMXSMAAMXXMMSMMAXSAMXMXMAMMMSAMSSSMAXMASAXXAMXSMMSMXASXSAMXSXMSMMMXMAS',
// 'AXAMMSXSSSSSMSAMXMMAXSXMASAAAAXMASMXXAXSSMXMAXMAMAAXMSXMMASMMMXMMAXXXMASMMMSMMMSMMMAMXMSXMAAAMXMMXMAMAAXMAMMMMAMMMMAMXXAASAMXMASAXXAXMASAMAS',
// 'SXSMAAAXMMAAAAXXAMSMXMXMMSMMMMSMASAAMMMMMMASXSMSMSMMAXAMSASXAMSMMSSMXSSMMXAAAAAAMXSAMXMXMSMSMSAXXASAMMXMAAXSAMAMASMSXSMMMMAMXSMMASMMMSASAMAS',
// 'MAXMMMXMASXMMMXMMXAXASAMXMXSSMAMXSXMASASMSASAMAMAMMMMMAMMMSXXMXXAMMXAMMAMMSSSMSMSASASAXAXAAMAMXMSMSXSAMSSMSAMSSSXSAMASXMAXAMXXXMSMMSAMAMXMAS',
// 'AAMAXAXSAMMXAXMAXSASMSASXAXXAMXXAMXMXSXSAMXSMMAMAMXXMASMMMSAMXMMXSAMSMMAMMMMMXXMMAXAMXMMSSXMAXMASAMXMAMAAXSMXAXXAMAMAMASMSMSSMMXMXXAMMSMAMAS',
// 'MSSSMSMMASXSASASXMXMXSAMMMAXMMSAMXXMASXMAMXMXMXSAMMAMXMAXXXXAAXMAMMMMMSMSXMAMMXMMXMMMMAAAXMSMMMMMAMXMMMSXMMXMMSMXMAMMMXMAAMAAAAAMSAMXAXSXMAS',
// 'MMXMAMASAMAAAAXMMMAMMMAXXMAASAMASXXSASXSMSXAXXMAXXSAMASMMSMMMSMMASAAXMAXMASMSMAMSMXMAMSMMSMASAAXXSMSXSMXAMXAAXXXXXSMMMAMMMMSSMMXSAAXMXXAMXAM',
// 'ASAMXMXMXMASMMXXAXAMAXASAMXXXAXAMXMMASAXAMXMXMXASMSASASAAAAXAXXSASMSSSSXMAMXAMASAASXMMMAMXXAMXMSAXAMXSAXXMAXSSMMMMXAAXAMSMXMAASMSXMMMXAXAMSS',
// 'XMAMMSMSXXXAMXXMXSSSXSASAMXSSSMAXXASAMXMAMAMASMXSASAMXSMMSSMAMASAMAMAAAMMSSSSSXMMSMAASXSMMMSSMMSMMAMXMAMSXSAAMAAAASXMMXAAXAXAXMAXMSSSMMXXMAS',
// 'MSSMAAAMMXSAXMXSXAAAASXSAMMMAMSSSSMXMMXSASXSASAAMXMSMXXXAAXMMMMMMMAMMMMMAMAAAMAMMMMSMMAAASAAAAASMSAMXMXMMAMMMMSXMMSAAASXSSMSMMMXMXAAAMXMXMAS',
// 'AAAMSMXMAASAMAAAMMMMMMASMSAMAMMXAAXSSSMSXSAMASMMSAXAXMASMMAAAAXAAXASMSXMASMMMMASAAAXXMSMMMMSSMMSASMXMASMMAMASXXMSMSMMMSAAAXAAAXMMMMSMMAASMAM',
// 'ASMMAMXMMMSSSMXSSXMXXMXMASXSMSXMXMMAASAMSMAMAMAMXXSMSXAAAXSSSSSSXSASAMASXSAAXSASMMMMAXASXXAXXMXMAMAASAAAMXMAMMSMAASXSMMMMMSSSMMMAAMAXMXXAMXM',
// 'AMXSAXXAMAMAXXAMXAMSXMAMXMAMXSAASMSMXMMMAXAMSMSMAMXMAMMSSMMMAMAAAMMMAMMMAXXMXMASMMSSMMASMMXSXXMMXMSMSMSMMSMAXAAXMSMASAMXMXXXMMASASXASXSMMMSA',
// 'AMASASMXMASMSAMXSSMAASXMSMXMAMMMMAAXXXXSMSSXMAAMSMAMASMAMAAMASMMSMMSSMXMXMSMSMXMAAAAAMAMAMAMMMSMAMXAXMMXASMSMSSSXXMXMAMAMMSAAMMMAXMAXAAXAAMX',
// 'SMAMAMMASXSXSAMXAMMSMMAAAAXMSSXXMSMMMMMSAAXAMXMMAAXMAMMASXMSASAAXAAMAMAMAMXAAAASMMXSMMASAMXSSXAMSSMMMMMMMSAAAAAAMMSAMXSAMASMMXSMAMXMAXMMMXSA',
// 'MMASAXSMMMMMXMXMASXMXSMMMMMSMAMXAXAAXXAMXMMSMAXSAXMMSMSASAMMXSMMSMMSXMAXASMSMSASASXAXSXSMSXMASMSAAAXXXAAXMAMMMSMMAAAXMAXMMXAAAXMMMXMAMXXSAXM',
// 'MMAMAXAMXAAMASXMASAMAMAAAAXAAAMMMSMMSMASMXMXSXMASMMXAAMASAMXAXXMAXMMMSSSMSAAMXXMAMXXMMASXSAMMMXMMMMMMSSSSSMSAMXAMAXSXSAXMXSMMSXASASXMASMMMSX',
// 'SMSSMSMMXSASXXAXAMXMASMSSMMMSSMXMAMAXXAMXAMASXMAMXXMMSMXMMSMSMMSMXSAXAAAXMXSSMSMMMSSSMAMASMMXSASXMSAMAAAAAASMSXMSMMXAMXMSAMXAMMXMASXMAXAAAAX',
// 'AAAAAXMAAXASASMMSSXSAXMAMXAXAMXASMSAMMSSSXMASMMSMAXAXXMXXSAAAAAAAAMXSMSMMMAXXMASAAXAAMMMAMAMASASAMAAMMSMSMMMAXXAAXAMAMAXXAXMMSSMMAMAMAXSMMSA',
// 'MASMMMMMXSAMMMAAXSAMXSMAMSXMASMMMXMASXMAMAMXSXXMASMSSXAAXSMSMSSSMSSXSXAMAMSSXSAMMSMMMMSMXSXMASAXAMXMMXAXXAAMAMMSMSMXAMSMMSMAMAMXMSSSMSMXAXXX',
// 'XXMASXMAMMMMXSMSMMXMAMMAXSMMMMAMSMMMMMMAMSSXXMASMXMXMMAMXMMXAAAXAXMAMSXSASAMAMXMSAMXSXXMAXAMXMXSXMASXSMMXXSMSSXXXSXMSXMAAXSMMASMAAAXAAXSAMMM',
// 'XASXMAMSXMXSAXAAAMSSMSSMMSMAASAMASMSMASAMXAXXMMMMASAMAXSAMXSMMMMMMMXMAMXXXMMSMSMSASXMMMSMSAMXMXMXAMXAAASMXMAMXAXASAMMAMMMMAXSXMAMMXMSMMMXAAX',
// 'MMAXMSMMASAMMMSMMMAAMAXMASXSMSASASMASMSAMXMMSXMASASMSMASXSXXAXXAMXMMASMSSSXAAXSAMXMXAAXAAAXSAMXMAMXXSMMMAAMXMMMMMMAMMAMMASXMXAXSSXSXMSAMASXS',
// 'AMMXXMASAMXSXAXMSMSSMMSMXSAXASAMMXXAMXMAXAXAAAMXMAMXAXXXAMXSAMSMSAXAXAAAAXMXSAMMMMSSSMMSXMAXAMXSMMAXXASMSMMXXXAAAMXMXAMXAMAMMMMXAAXAASMMAXMX',
// 'XAMXMMMMSMMMMAMAAAMMAAAXXMAMAMXMASMSSXMSMSSMSSMAMAMSMSMMAXMAMAXXSASXSMMMMMXXMAXSAMXAAXAMMSXSMSAAAMXMSAMAMAMSASXSMXAXXSSMASAMXXMXMXSMMMMMXSAM',
// 'SASAMAXMAXASMSMSMSXSMMSSXSAMAMSSMXAAAAXMAMMMAMXMMAMAAAMMXSMASXMASAAASXXSAMXXXMMSMSMSMMASAMAAAMXXMSMAMXMMMAMXAMXAXXSMMMAMAXAMSAMXXXXAAXXXAAXA',
// 'AAMXSMXASXMXAAAXXXAXXSXMASXSXMAAXMMMSMMMXMAMXXAXSASXSMSMAMXASAMASAMAMAXXMAMMSAMXXXMASMAMAMSMSMSMAMMXMMSXMXSMXMMMMXXASMMMMSMMSMSAMSSSMSMMMSMS',
// 'MSMXXASAMAXMXMSMSMSMSAMMAMAMMMSMMXMAMASAASMMMSMMMAXAMAXMAMAXMAMAMAXXMSMSSSSMAMMMAXSAXMASMMAMAAAMAMMXMAMAMAXXMAMXSXSAMMXXMAXAXAXMXAXXXXAAAAXX',
// 'XAAAMXAAXAMXXXXAAAAXMASMAMMXMXMASXSAMAMSMSAAAAMAMSMSMMMSSSSXXAMMSSMXMXAMAAAXSMSMMXMAXSXSXSXSMSMSSMSAMASAMSMSSSXAAMMAMXMAMAMXMSMSMSSMXXSMSXMM',
// 'SMMXASMSMSAMXMMMMSMMXAMMMMXXSAMXSAMXMXMXXSMMXXMAXAAXAXAXXAAMSMMMAAMXSMMMMSMMMAXASMMSMXAXAMMXMXMAMMXAXASXSAAAAMMXMSSSMSMXMSXXAMAXAXAASMMMMAXM',
// 'MXMSMMAAMMAMXMASXMASMSSMSAAAMMSAMAMXMASXMMASASMSSMMSXMXSMSMMAXAMSMMAMAAAMAAMXSSMMAAAMXMMMMAASXMASMSSMAXMMMMMAMXSAAAAAAAMXMAXSMMMXMMMMAAASMMA',
// 'SAMXAMSMXSAMMXAXASASMMAASMXXAXMASXMXSAMSAMMMAMAMAXASAMAMMAXMMXSXMAMASMMXSMXMAMAAXMMSSMMAAAMMXASXSAAXMAMAMAAXSMAMMMSMSMSAAMSMMAAXAMXXXSMMSXSS',
// 'SASMMMXAASXMAXMSMMASXMMMMXMMMMSAMAAXXMXAMMXMAMAMMMXSAMAMSMSASMMASXSASMAXSMSMSSSMMSAMAASXSMSXSMMXMMMSXMAXMMSAAMSXAXAAAAAMXXAASXMXASAXMXAMXMAM',
// 'SAMXSAMMMXSXSMMAXMXMASXXMAAAAAMASMMMASMSSSSMMSXMXSASAMXXXAXAMXMAMXMASMXMXAAAXAXAXMASMMMXMXSMAXSMMSXMAMSSMAXMXMAMXXMXMSMMMSSXMMSAMXMSAMXMAMAM',
// 'MAMAMASAXAMXMASMSXMXAMMAMXXMAMSMMXXMAMXAXXAAMMMAMMXSAMMAMMMSMMMAMMMMMAASMSMSMSMSMSMMMAXXXAXMMMXAAMASAMMXMAMXSXSASXXSXXAAMAMAXAXAMMXSMSSSXSAS',
// 'SAMXXAMXMAMAAMAAAASMSMSASMSMSMSMSXXMSSMMSMSMMAMMSSMMMMXMAAAAAAXASAAAMSMSAMAMAMAXXASAMXMSMXSXXXSMMSASASXMXMXAAAMAASAAAMSMMASMMMSMMMXMXAAAXSXS',
// 'XASXMSSMSSMMSMMXMMMAAAXASXAXXAMAMXXXAAAXXAMXMAMAAAXAAMASMMXSSMSXSMSXMAMMMMXMAMXSMMSXSAAXXAMMMXAMAMMSAMXSASMXMXMMMMXMSMMASXMXAMMMAXMAMMMMAMXM',
// 'SMMAXAAAAMAXXXAXSSMSMSMAMMMMMXMASMSMMSMSMSMSSSMMSSMSMSAMXSMMMAAXXXMMMASAAXMSXSASAXMASMSMMXSASAAMASMSASMMASXMXXXXAXAXAASAMXMMSMAXXMXXXAMMMSAS',
// 'AAXSMSSMSXSMXMXMXAAMAMMXMAXAAASMSAAAAAAXAAAAAMMMAMMAAMASAMAAMSMSMMSSSMMMXSAAAMAXMMAXXXMAMXSASXSMXMAMXSAMSMXMMMMSMSMSMMMAMASAXMSMSMMMSXSAAXAM',
// 'SSMMAMXAXAMXXAAMMMMMAMMXMASXMASXMXMXMMSMAMMMXMMMAXMMSMSMXSSMMAAAMAAAASAXMAMMMMXMSMMSASMSSMMMMMXMMMSMMSAMAAAXAAXAAAAAXXSAMASASAMAMXXMAAMMSMSM',
// 'AAXMSMMAMMMMSSMSASXSXSASXMMAMAMXMMMMSSMMSXSSSSMSSMMXXXMMXAXMSMSMSMMSMMMSAXXMXMAAMAXSAMAAXXAAAMSAXAAAASASMSMXXXSMSMSMSASMXXMAMMMMMMXAMSMAMAAS',
// 'MSSMXSSMSAMXAMMSMSAAXMAMMASXMASAMAAAXAAXXAXXAAAAMAMMMSAAXMSXMAXXXMAMASAXXXXMASMSSMMMAMMMSSSXMMSAMSXSMMAXXAXMSMXMAMAMMXMMMSMMMXAAAMXMSXXAMMMS',
// 'XAAAAXMASASMASAXXXMMSMSXSAMAMXXMMSMSSSMMMMMMSMMMSAAAAMXAXXXAMMMAXMAMMMMSASMSASAMAXXMXMXXXMASMMMMMXAMXXAMSMSAMXASMXSXMAAXAAAAXMSSSSMXAAXSSMXS',
// 'MMSMSSMAMXMXMMMSMMMXXAAAMXSAMMSMXAXAAAMAAAAXAXMMSXXMMMMAMSSMMMSMMMAXMAMMMAAAASASMMSSMMMMXSAAXSMAAXAMMMXXXAXMMXMMXSAMXMMXSSSMSMXAMMXSMSMAAMAX',
// 'MMMAMXMAXAAXSASAAASXMAMSMASASAAXXAMMXMMSSSMXMMSAMMSMSASAAAAXXAAXAMAXXASXXMSMMSMMMAMSAMXSAMXSMASMMSMXAMXMMAMAMXMAMMAMSSMXXXXXAMMAMAAXAMMXMMSS',
// 'SAMAMMXMSSSMXMXMXMSAAXAAMXSAMMSSMMMSAAXMAXAASXMASAAASASMSSMMMSSMSAAMSMMAMXXMASAAMSMSMXAMASAAAMMSAAASXXAMAAXASAMAMMSMAAXSMMSSMXSMMMXSASXSXAXM',
// 'MASXMAMMAMAMSMSSMMSMMMSXSAMXXSAMAAAXXSMSAMXMMASAMMMMMASMAXAAAAAAXMMMAAMMMSAMXSMMSAXSXMXSAMAMSXAXMXMAMMASXXSASMMXMAMMXXAMXAAAMMMXAXAMAMAAMSSS',
// 'MAMXSSMMMSAMXXAAAMXAAAMMXAXASMAMSMMSAXAMMSMASMMXSXMXMAMMMSSSSMMMMMXSMSMAASASXSAMXMASAMXMASAMXMMXSXMASMMMMAMAXXSXMASXSSSSMMSSMAMMSSXMSMSMXASA',
// 'SASXMXAAAMASMMSSMMSSMXSASAMXXMAMMAXMXMAMAAAXMXXAMXSAMXSAMXMAXAAXSSMSAAMMMSAMAMMSASXMMSAXAMXXXASAMXMAXAXXMXMSMXAASAMMAAAMXXXXMASAXXXXMAXSXMMM',
// 'AAXMASMXMMAMXAAAAAXMAMXMAMMXMXXSMAMMXSAMSSXSMSMAMAMAMXSXSSMMMSMMXAASXMMSXXXMAMAMMMASXMASXMSMSAMASMSMSMMSSXMAAMSMMASMMMMMMXMASASMMMMMMAMMXXAX',
// 'MSMMXMMXXMAXMSSXMMXMASXMMMSASAAMMMMMAMAXXMAXAAMAMMSAMMMXMASXAAXAMMMMAXXXSAMXXMMSXSAMXMAMAAAAAAMXMAAMAAAAMASXMMAMMMMAMMSAAXAMMMSXAAASMMMSMMMS',
// 'XMXMXAXMAMAMMMMXAMXSASXAAASAMMSMAASXSSSMAMSMSMSMSXSXSAMMXAMMMXMMAXAMAMSMMMSSXAAAXMAMXMASMMMSSSMMMSMSXMMASXMMMSMSAXMMMASAMASXMAMMMSASXMAAAAAX',
// 'MMAMSSMASMSXSAXSMXAMSSXMMMMAMAMXSXSAAAAMMMAAXAAAMXMXSASMXSSXSXAXSSMMSXMAXXAXXXMMXSAMXMAXXAAXAAMAXMXXMSMMMAXAXAASMMSAMAMAMSMAMMXMXMXMAMSSSMSS',
// 'MMMMAAMSXAAAMAMMMMMSXMXSMSAXMSSMXMXXMSMMASMSMSMSMXMASMMMAMAASXMXMAMAMAMMMMMSSMMMASASXSSSSMSMSMSXSXXMASAASMSSMMMMAAMAMXSSMAMAXXAXAMASXMAAAAMM',
// 'MSMMSSMMMMMSMMMAAMMAAMMMAMXSXXAMXMAXAXXSASAMMMAXMXMAXMAMAMMMMAMSSSMSSSMAAAXAAAAMXSAMAAXMXAAAAAXAMXMAASXMMAAMXSAMMMSMMMAASMSMSSMMASAMMMMXMMMS',
// 'MAAMMAXMAXAAAASMMSMSXMAMXMAMASXMAXAXXMASAMAMSMAMAAMMXSASXXMASMMAAAAXAASMMMMMSMMXAMAMMMMMMSMXMSMAMASMMMASMMMMAXAXXAAAAAMMXXMMAAASMMMSMASAMXAS',
// 'XSSMMSMSSSSSSMSAXMAMMSXSAMXMAXASMXMXXMAMXMAMAMASXMXMASAMXAXXSAMMXMXMMMMXAXSXMASMMSMMAAAAXASAMXMXSXSASXMMASMMSSSMMSXSMSXXMSMMMSMMAAAXXAXAMMAS',
// 'XXAAAXMXAXAAMASAMXXSAMASAMXMSMMAMASMSMASXSXXXSAXASXMASASAXSAMXMSXMMSSSMMSMMASAMAMAMMXSSMSASMMMSXMAXAMSXSAMXAAAAXAMAMXMAAAAAAMAXSMMMSMSMSMMSM',
// 'ASXMMXMMXMMMMAMMSMMXAXAMAMSMMAMXSXMAASMMMMAAMMMXAMAMASAMASAXXAMXAAAAXAAXXMSAMASASMXSAMAAMAMXMAMAMMMMMXXMASAMMSMSAMMMAXXMSSSMMMMSAASXMMAMXSAS',
// 'XXMASAMMMSMAMASAAAASMMXSXMAASXMAMAMSMMXAXMMMMAMXMSMMXMXMXMMSSSXSXMMSSSMMMAMASXSASAAMAMAMSAMAMASAAAAAAXXSAMAXAXXMASXSSMXMAMXMASASMMMAAMAMXSAM',
// 'XSXASAMXAASXSAMXSXMASXAXMXMXMXMAMXMAASMSXMAAXAMAMAXAAXAMXAMXAMXMXMXMMAASMXMXMAXAMMMXXMXXSASXSASMMSSMSMMMXSXMXMXMAMMMMAASAMASMMASMSSMMSAMXMAM',
// 'XXMASMMMSXSMMAXAMXMXAMXMAXSXMMSMXMXMMXAMSSSSSSSMSAXSASASASXMXMASXMAXSMMMAMXSMSMXMXXXSASXMMMAMAMMMMMMMAMXXMAMSASMAMMMMMMSAMASXMSMMAAAAXMXXSAM',
// 'MMMXXXMXMAMASAMXSXSXMXMSSXAAXMASAASXMMXMAXAXAMMXMMMMAMAMXXXMASXSASXXMAAXMMAMAAAASMSXMASMSSSMSMSMAAAAMAMXASAMMAMAMXSMSMMSXMXSMMMAMSMMMSSSMSAS',
// 'AAAXMSMAMXSAMXMXMASMMAAAXSMSMMASMMAAMSMMMSMMAMXXMASMXMAXXMASASXSMMSASXMMXMASMMSMSAAMMXMMXAAAAAAXSSMSMMMSXMAXMAMASMMAAMXSMMMMAASMMXXSMMAAASAX',
// 'MSXXAAMMMAMMSSXAMAMASXMMMXSAAMMMMMSMMAXAAAXASMXXSASAMSSXSSMMASXSMXAXXMASXSMSAMXMMXMASAXSXSMMMSMMXXAMXMXSXSXMMMSAXAMSMSAMAXASXMSASMMSAMSMMMMM',
// 'MAMMSMSMMXXXAXSXMASXMSMXSSMMSMAAXAAASMSMSSXAAXAAMSMAMAAAXASMXMAMMMMXXMASAMAXMAXXMAXSSMXMAMAXXAMXMMXMMSAMXAXSAMMAXSMMAMASMSMAAASXMAASXMMXSAMX',
// 'MASAMASMSSSMMXAXMASAAAMXMASAMXSMMSSMMXXMAXMSMMAMMASAMMSMSAMXAMAMASMAMXXMAMXMASMSMSMMXXASMSXMMAMSSMSAAMXMXMASASXMAMAMXMAMMAASXMMASMMMSMAASASX',
// 'SAMAMAMAAAAXXXMXMASMSMSASAMXMAMAMXMAMXMXXXMAMXMSMMAXXAMXMXMSMMASASMASXMSMMASXMXAAMSMSSMMASAASAMXAAAXXMXMXXXSAMASMMAMAMXSSXMMMASAMMSXMMMMSMMX',
// 'MMSSMASMMMMMSMXMMXSXMASASXSXMAMXXMXXXAAMSSSSMXAAMXMSSMXMSAMXSXMMMMMASXAAXXASAMMMMMASAAAMAXAXMASMMMMMASAMMSMMAMAXMAMSMSMAMSAAXXMASXSAMXMASAAA',
// 'MXAASXSASXSAXAXAXMXMMAMXSXAAMASMMSSSSXSXAAAAAMSMMMAAAMAMSASASMAXAXSMMMSMSMAMXXAAAMXMSSMMSSMMSMMAMMXMAMAXAAAMSMXSXAASAMMAMMXXSXXMMMSAMXMAMMAX',
// 'MMXXMMMAMAMAMXSMSAAAMXSAXMSXMASAAAAMMMMMMSMMMMAAAXMMMMAMMAMASXSMMMAAAAAAXMXMSMSSSSSMAXAXAAMAAXMAMMAMSSSMSXSXXXAAMXMSAMSSSSMMMMMAAAXMASMSXSAS',
// 'MSSXMAMAMXMAMMAASMMMXAMMSAMXMXSMMMSMAAXMAMAMXSSSMSSMASXSMAMXMAXAXAMMMSSSSMAMAAXXAAXMAMMMSSMXSXSASMXSAAAAMAMMAMXSASXXAMAAAAXAMAAXMSXMAMXAAMAA',
// 'AAAASMXMSXSMXAMAMAMXMXAAXASAMXSASAXXSXMSMMSXMAXAAAXMMMAMXMMMAXMSMXMXXAAAMXASMSMMMMMMSSSMMMXMAASXMASMMSMMMAMAAMMMXAASMMSMSMMSMSSXSXMMSSMMXMMM',
// 'SMMMMSAMXXAMXSXMSAMXASXMMAMAMASAMMSMMXAXAMAXXXXMMMSMMMAMASMAMMMMAASXXSMSMSXSAMXXASXMAAAMMAAMMMMAASXXAAXMSMMSMSAMXMMMSAAXXMAMXAMMXAXXAXMASAXX',
// 'XAXXAAMMSSMSAMAASMXSMMASMSMSAAMXMASAMMMSAMMMMSMMXAXAASASXMMAMXAMMMMAXMAMAMAXMAXMMSAMMSMMMXMXXAXXMAXMMSSMAAAMASMSMXXXMXMAMSAMXMSASMMMMSMAMMXS',
// 'SSMMSMXAXAAMAMMMMMASAMAMXMAXMMSMSMMAMAAXAAXAAAAMMMSMMSAMXMSSSMMSASMSMMAMAMSMMMSAXSAMAMXMASXSSSSSSMMSAAAMSSMMAMXSMMSSMMXAAMMSMMAMAMAAXAMAXMAM',
// 'MAAAXXMSSMMMAMAAAMXSAMXSAMXMAXSAMXSASMSSSMSASXSMXAAAXXAMAMAXXAMSASAAMSAMASXAAASAMSXMXSAMASAAAAXAAXAAMSMMXAAMMSASAAAAAASASXSAAMSSMASXSXSASMAS',
// 'SSMMSXMASMXSXSSSSSXSMMASMSXSSMMMMMSMSXXMMAMXMAMAMSSSMSSMXMASMSMMXMXMMAXSXSXMMXMSAMXXASXMMMMMMMMSMMSSXXMASXMMAMASMMSSMMSSXMSAMSAAXMAMXXMASXMM',
// ];

const input = rawData.map(row => {
  return row.split('');
})

const search1 = ['X','M','A','S'];
const search2 = ['S','A','M','X'];

const directions = [
  // [x, y]
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1]
];

const getStartOfWord = (firstLetter) => {
  const toReturn = [];
  for(let i = 0; i < input.length; i++) {
    const row = input[i];
    for(let j = 0; j < row.length; j++) {
      if(row[j] === firstLetter) {
        toReturn.push({i, j});
      }
    }
  }
  return toReturn;
}


const test = (search) => {
  const possibleWords = getStartOfWord(search[0]); // get all Xs
  console.log('possibleWordsFirstLetterPosition', possibleWords);
  let count = 0;
  possibleWords.forEach(({i, j}) => {
    directions.forEach(([xd, yd], k) => {

      switch(k) {
      case 0:
        console.log('Horizontal', i, j);
        break;
      case 1:
        console.log('Vertical', i, j);
        break;
      case 2:
        console.log('Diagonal', i, j);
        break;
      case 3:
        console.log('backDiagonal', i, j);
        break;
      }

      let x = i;
      let y = j;

      let foundWord = 1;

      for(let l = 0; l < search.length; l++) {
        const letter = search[l];
        console.log('search for: ', letter, ' in ', x, y)
        if(input?.[x]?.[y] === letter) {
          console.log('ok')
          x = x + xd;
          y = y + yd;
        }else{
          foundWord = 0;
          break;
        }
      }
      // Found
      if(foundWord) {
        console.log('Found')
        count++;
      }
    });
  });
  return count;
}


let sum = 0;
sum += test(search1);
sum += test(search2);

console.log(sum);