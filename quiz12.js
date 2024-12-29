console.time('run:')

let input = [
  'XXXXXUUUNNNNNNNNNNNNNNNNQQQQQQQQQJJJJJJJJJJJJJJJJCCCAAAAAAAAAAAAOVVVVVVVVVVVVVVVVVVLLLLLLLLKKKKGGGGGGGGGGGGGGGGGGGKKKKKKKKKKKKKKKKKKKKKKKKKK',
'XXXUXXUUUUNNNNNNNNNDNNDGQQQQQQQQQJJJJJJJJJJJJJJJJJJCCCAAAAAAAAAYVVZVVVVVVVVVVVVVVVVVLLLLLLLLKKKGGGGGGGGGGGGGGGGGGGKKKKKKKKKKKKJKKKKKKKKKKKKK',
'XUUUUUUUUUENNNNNNNNNNNDCCCCCCCCQQJJEJJJJJJJJJJJJJJCCAAAAAAAAAAAZZZZVVZVVVVVVVVVVVVVVLLLLLLLLKGGGGGGGGGGGGGGGGGGGGKKKKKKKKKKKKAKKKKKKKKKKKKKK',
'UUUUUUUUUUUYNNNNNNNNNNNCCCCCCCCQJJJJJJJJJJJJJJJJJJCAAAAAAAAAAAAZZZVVVVVVVVVVVVVVVVVVLLLLLLLLLLZGGGGGGGGGGLLGGGGGGKKKKKKKKKKAAAAKKKKKKKKKKKKG',
'UUUUUUUUUKKNNNNNNNNNNZZCCCCCCCCJJJJJJJJJJJDDJJJJJJCAAAAAAAAAAAAHZZVVVVVVVVVVVVVFVVMVVLLLLLLLLLMAAAGGGGLLGLLGGGGGGGGGKKKKKKKAAAAKKKKKKKKKKKKG',
'UUUUUUUUUKUANNNNNNNNNZZCCCCCCCCQJJJJJJJJJDDDDJJJJJCJJAAAAAAAAAAHZZVVVVVVVVVVVVVVVVMMLLLLLLLGLLMAAAAGGGLLGLLLLLLLGGGGKKKKKKKAAAAKKKKKKKKKKKKG',
'UUUUUUUUUUUUUNNNNNNNNZZCCCCCCCCQQQQJJDDDDDDDDDJJJJJJAAAAAAAAAAAZZZVVVVVVVVVVVVVVVVMMLLLLLLGGGMMAALGGGLLLLLLLLLLLGGGKRKKKKKKAPPPPPKKKKKKKKKKG',
'UUUUUUUUUUUUNNNNNNNNNZZCCCCCCCCCCCCCCCCCDDDDDDJJJJJJAAAAAAAAZZZZZZZVVVVVVVVVVVVVVVMMMLLLLLGGGMAAALLLLLLLLLLLLLLLKKKKKKKKKKKPPPPPKKKKKKKKKGGG',
'UUUUUUUUUUUZNYNNSNNNNZZCCCCCCCCCCCCCCCCCDDDDDDEJJJJJAAAAAAAAAZZZZZZVVVVVVVVVVVVVVVMMMLLLLLGMMMMMALJLLLLLLLLLLLLLKKKKKKKOKPKPPPPKKKKKKGGKGGGG',
'UUUUUUUUUUUZNSNZZZZZZZZCCCCCCCCCCCCCCCCCDDDDDDJJJJJAAAAAAAQAAAZZZZZZZMFMMMMMMMMMMMMMMMLLLGGMMMMMMMLLLLLLLLLLLLLLKKKKKKKKPPPPPPPPKKPKKGGKGGGG',
'UUUUUUUUUUMSSSZZZZZZZZZCCCCCCCCCCCCCCCCCDDDDDJJJJJJAAAAAAAQZZZZZZZZZZFFMFMMMMMMMMFFMMLLLLGAMMMMMMMMMLLLLLLLLLLLLLKKKKKKPPPPPPPPPKKPKKGGGGGGG',
'UUUUUUUUUMMSSSZZZZZZZZZCCCCCCCCCCCCCCCCCDDDJJJJJJJJJAAJAAQQZZZZZZZZZZFFFFMMMMMMMMFIAMMAAAAAMMMMMMMMLLLLLLLLLLLLLLKFKKKKEPPPPPPPPPKPKGGGGGGGG',
'OOUUUUUUSSSSSSZZZZZZZZZCCCCCCCCCCCCCCCCCDDDJJJJJJJJJJJJAAQQNNNZZZZZZZFFFFFFFFFFFFFFAAAAAAAAMMMMMMMMXLLLLLLLLLLLLKKUUUUUPPPPPPPPPPPPPPPGGGGCC',
'OUUUUOUUUPSSSSZZZZZZZZZZZZZZZQQCCCCCCCCDDSDDCJJJJJJJJAAAAAQNZZZZZZZZZFFFFFFFHFFFFFFFAAAAAAAAMMMMMMCCCLCLLLLLLLLLLTUUUUUPPPPPPPPPPPPPPPPGGGCC',
'OOUGGGGUUSSSSZZZZZZZZZZXXXXJJJJJJCCCCCCDDSSCCJJJJJJJJAAAAANNNNZZZZZBPPFFFFFFFFFFFFFFAAAMAAAAAMMMMMMCCCCCLLLLLLLLLMMUUUPPPPPPPPPPPPPPPPPGGGCC',
'OGGGGGGLLLLSSZZZZZZZZZZXXXJJJJJJJCCCCCCSSSSSJJJJJJJJJJJAAANNNNNZZZNPPPPFFGPPFFFFFFFAAAAMAAMMAMMMMMMCCCCCCOOOLLLLLLMMUUUPPPPPPPPPPZPPPPCCCCCC',
'OGZZGGGLLLLLSZZZSSSXXXXXXXXXJJJJJCCCCCCSSSSWJJJJJJJJJJPJANNNNNZZZNNPPPPPFPPPPPFFFVHHAAMMMMMMMMMCMCICCCCCCCCOOLTOOLMMMUUPPPPPPPZPPZPCCICCCCCP',
'OGGGGGGGGLLSSZZZSSSXXXXXXXXXJJJJJCCCCCCSSSSSJJJJJJJJJJJJNNNNNZZZZZNNPPPPPPPPPPPVVVVVMMMMMMMMMMCCCCCCCCCCCOOOOOOOOOMMUUUUPPPPPZZZZZZCCCCCCCCP',
'SGGGGGGGGLSSSZZZSXXXXXXXXXXJJJJJJCCCCCCJSSSRJJJJJJJNJJJNNNNNNNZZZNNPPPPPPPPPPPPVVVVVMVMMMMMMMCCWCCCCCCCCCCCOOOOOOOOOUUUUPPPPPNNZZZCCCCCCCCCP',
'SGGGGGGGSSSSSZZZSUXXXXXXXJJJJIJJJCCCCCCJWWWWJJJJJJJJLJJNNNNNNNNNNNNNPPPPPPPPPPPVVVVVVVMMMMMCCCCCCCCCCCCCCCCCCOOOOOOOUUUPPPPPPNNNNCCCCCCCCCPP',
'SSSGGGGGGGVSSSSSUUXXXXXXXJJJIIJJJCCCCCCWWWWWJJJJJJJJJJNNFNNNNNNNNPPPPPPPPPPPPPVVVVVVVMMMMMMMRRRRCCCCCCCCCCCCCOOOOUOOUUUPUTNNNNNNNCCCCCCCPCPP',
'SSSSZGGGGGRYSSSRXXXXXXXXXXJJJJJJJJJJJJWWWWWWWJJAJJJJJNNFFNNNNNNNNPPPPPPPPPPPPPVVVVVVVMMMMMMMMRRRCCCCCCCCCCCCCOOOOUUUUUUUUTNNNNNNNNCCCCCCPPPP',
'SSSZZGHGGGRRJSRRGXXXXXXXXXXJJSSJJJJJJJWWWWWWWJJAJJJJJJFFNNNNNNNNNNPPPPPPPPPPPPPVVVVVVMMMMMMMRRRRRCCCCCCCCCCCCOOOUUUUUUUUUTTTTTNNNNNCCCCPPPPP',
'SSQQZZGGGGRRRRRRRXXXXXXXXRXRRJJJJJJJJWWWWWWWWWJJJJJJJJJFFFFFFNNANNNPPPPPPPPPVVVVVVVVVMMMMMRRRRRRRCLLCLLLLLCCCCOOOUUUUUUUTTTTTTNNPPNCCPPPPPPP',
'QQQQQZZGGGRRRRRRRXXXXXRRRRRRRRJJJJJJWWWWWWWWWWWWWJJJJFFFFFFFFAAAAAPPPPPPPPPVVVVVVVVVVVVDMMMRRRRRRRLLLLLLLLCLCLOOUUUUUUUUUUUUUUUPPPPPPPPPPPPP',
'QQQQZZQQZRRRRRRRRRRRRRRRRRRRRRRJJJJJSWWWWWWWWWWWWWJJJFFFFFFFFAAAAAPPPPPPPPVVVVVVVVVVVVDDMDRRRRRRRRXXXXLLLLLLLLUOUUUUUUUUUUUUUUUPXPPPPPPPPPPP',
'QQQQQQQQQRRRRRRRRRRRRRRRRRRRRRRRJVJSSWWWWWWWWWWWWWFFFFFFFSFAAAAAAAPAPPPPPPVVVVVVVVVVDVDDDDRRRRRRRRLXLLLLLLLLLLUUUUUUUUUUUUUUUUUUXXPPPPPPPPPP',
'QQQQQQQQQRRRRRRPRRRRRRRRRRRRRRRRVVWWWZWWWWWWWWWWWWJFFFFFFFAAAAAAAAAAVPPPPPVVVVVVVVVVDDDDDDHRRRRRRELLLLLLLLLLLSSUUUUUUKUUUUUUUUKUXPPPPPPPPPPP',
'QQQQQDQDGRSPRPPPPRRRRRRRRRRRRRRRRVVVWWWWWWWWFFJJJJJJJJJFFAAAAAAAAAAAAAPPVVVVVVVVVVVDDDDDDRRRRRRRRRRRLLLLLLLLLLSUUUUUKKKUUKKKUUKUUPPPPPPPPPPP',
'QDDQDDQDGGPPPPPPPRRRRRRRRRRRRRRRRVVWWWWWWWWWDFFJJFFFFJJFFAAAAAAAAAAAAAAPVVVDDVVVVVDDDDDDDRRRRRRRRRRRLLLLLLLLLSSSUUSUUKKKKKKKKKKUYYPPPPPPPPPP',
'QDDDDDDDGPPPPPPPPRRRRRRRRRRRRRRRRVVVVWWWWWQQFFFJFFFFFFFFFAAAAAAAAAAAAABBHDDDDVVDVDDDDDDDDRFRRRRRRRRLLLLLLLLLLLSSSSSSKKKKKKKXXDYYYYYPPPPPPPPP',
'DDDDDDDGGGPWPPPPPPPPRRRRRRRRRRRRRRVVVWWQQWQQQFFJFFFFFFFFAAAAAAAAAAAAAUBBHBBBDDDDDDDDDDDDDDRRRRRRRRRLLLLLLLLLLSSSSSSSKKKKKKKKXDYYYYYPYPPPPPPP',
'DDDDDDDDDGPWPPPPPPPPPRRRRRRRRRRRRRVRWWWWQQQQQFFFFFFFFFZFAAAAAAAAAAAAABBBBBBBBBBDDDDDDDDDDDDDYRRRRRRRLLLLLLLJLLSSSSSSKKKKKKKKXDDDYYYYYYYPPPKP',
'DDDDDDDDDDDDPPPPPPPPPRRRRRRRRRRRRRRRRSSQQQFFFFFFFFKKFFFHHHAAAAAAAAAAABBBBBBBBBBBDDDDDDDDDDDDRRRRRRLLLLLLLLSSSSSSSSSUKKKKKKKKDDDDYYYYYYYPPPPY',
'DDDDDDDDDDAAPPPPPPPPPRRRRRRRRRRRRRRRSSQQQEEGFFFFHHFFFFHHHHAAAAAAAAABBBBBBBBBBBBBDDDDDDDDDDDDRRRRRRRLLLHHLLLSSSSSSSSSKKKKKKGGDDDDDDYYYYYPPPYY',
'DDDDDDDDDDAAAPPPPPPPPPRRRNNRRRRRRRRSSQQQQEEEFFFHHHHHFHHHHHHHAAAABBBBBBBBBBBBBBBBBDDDDDDDDDRRRRRRRRRLLLHHHLSSSSSSSSSSKKKKKKDDDDDDDDYYYYYYYYYY',
'DDDDDDDDDDDAAPPPPPPPPRRRNNNRRRRRRRQQSQQQQEEEFFFHHHHHHHHHHAAAABBBBBBSSBBBBBBBBBBBBDDDDDJJJJDDRRRRRRRHLLHLLLLSSSSSSSSKKKKKKKUDDCDDDDYYYYYYYYYY',
'DDDDDDDDDDAAAPPPPPIIIRRRRNRRRRRRRRQQQQQQQEEEFFFHHHHHHHHHHHHAABBBBBBBBYBTBBBBBKBRBDDDDJJMMJJDRRSSRRRHLHHHHHLQQQSSSSSSKKKKKKDDDDDDDYYYYYYYYYYY',
'DDDDDDDDDDDAAPPPPPPQIIIRRRRRRRRRRQQQQQQNNQEHHFFFHHHHHHHHHHHHHBBBBBBBYYYBBBBBBBBRRRRDDJJJJJJRRRRRRRHHHHHHJJLQQQSQQSSSSSSKKKDDDDDDDYYYYYYYYYYY',
'DDDDDDDDNNDQAPPPPPQQQIIRQRRRRRRRRRQQQQQQNNSHHFHHHHHHHHHHHHHHHBDBBBYYYYYBBBBBBRRRRTDDJJJJJJJTRRRRRRHHHHHHHQQQQQQQQSSSSSSSDDDDDDDDDYYYYYYYYYYY',
'DDDDDDDDNNNQAPPNPPPQQIIQQHRRRRRRRRQQQQQQQNSHHHHHHHHHHHHHHHHEHBDDGBBGWWWBBBBBBBRRRTTTTJJJTTTTRHHHHHHHHHHHHHQQQQQQQSSSSSSSSSDDDDDDYYYYYMYYMYYY',
'DDDDDDDNNNNQQQPPQQQQQQQQQHHHHHXXXXXQQQQQQNNNHHXXHHHHHHHRRHRRRRDDGBBGWWWWBBBWWBRRRTTTTTTTTTTTTHHHHHHHHHHHHQQQQQQQQSJJSSSSSSSDDDDDYYMYMMMMMMYM',
'DDDIIDDDDNNQQQQPQQQQQQQQQQHHHXXXXXQQQQQQQNNEEEHHHHHHHHHRRRRRRRGGGGGGWEWWWBBWWBWWWWRTTTTTTTTTHHHHHHHHFHHLQQQQQQQQQQJJJSSSSDSDIIDDYYMMMMMMMMYM',
'DDDDDDDHNNNNQQQQQQQQQQQQHHHHXFXXXXXXXNNNNNNNNHHHHHHHHHHRRRRRRUUGGGGGGGGWWWWWWWWWWWRRTTTTTTTHHHHHHHHFFHGQQQQQQQQQJJJJJJSSSDDDIIYYYYMMMMMMMMMM',
'QDDDDNNNNNNNNQQQQQQQZZQQQHHXXXXXXXXXXNUNNNNNNNNPNYYHHHRRRRRRRRUGGGGGGGGWWWWWWWWWWWWWTTTTCTTTHHHHHHHHHGGGQQQQQQQJJJJJVJWSWKKKYIYYYYYMMMMMMMMM',
'QDDQNNNNNNNNNNNQQQQQZZLQHHXXXXXXXXXNNNNNNNNNNNNNNNYHHHRRRRRRRRRGGGGGGGWWWWWWWCWWWWCWTTTTCCTCHHHHHHGGHGGQQQQQQQJJJJJJVWWSWKKKYYYYYYYYMMMMMMMM',
'QQQQNNNNNNNNNQQQQQQQZZZZZXXXXXXXXXTNNNNNNNNNNNNNNNNNHHRRRRRRRGGGGGGGGGGWWWWCCCWWWCCQQCCCCCCCHVHHHHHGGGGQQQQQQQJJJJJJJWWWWWKKKQYYYYMMMMMMMMMM',
'QQQNNNNNNNNNNNQQQQQQQZZZZLXUWXXXXXNNNNNNNNNNNNNNNNNKKHRRRRRRRGGGGGGGGGGWWWCCCCCCCCCQQQCCCCCCVVVVVDDGGGQQQQQQQQJJJJJJJWWWWWLKLQQYQQNMMMMMMMMM',
'QQQQNNNNNNNNNNQQQZZZZZZZZZOWWXWXXWNNWNNNNNNNNNNNKKKKKKARRRRRRGGGGGGGGGGGWWWCCNCCCCCCQCCCCCCCCVVVVDGGGGKOQOKKQJJJJJJJWWWWWWLLLQQQQMMMMMMMMMMM',
'QQQNNNNNNNNNNNNQZZZZZZZZZZZZWWWWWWNWWWNNNNNNNNNNKKKKKKARRRRKKKKGGGGGGGGGGWWWCCCCCCCCCCCCCCCCCCVDDDDDGGKOOOKKQQJJJJJWWWWWWLLLLMQQQMMMMMMMMMMU',
'LQQQNNNNNNNNNNQQZZZZZZZZZTTTTWTWWWWWWWNNNNNNNNNNNKKKKKARRRRKKKKGGGGGGGGGWWWUCRCCCCCCCCCCCCCCJDDDDDDGGKKKKKKKKKJJJJJWWWWWWMLLLMQQTMMMMMMMMMMM',
'LNNNNNNNNNNNNQQQZZZZZZZZTTTTTWTWWWWWWWNNNNNNNNNNKKKKKKARRRRDKKKKKKGGGGGGWGUUCCCCCCCCCCCCCCCUCCDDDDDGDKKKKKKKKKJJJJTTTWWWMMMMMMMMMMMMMMMMMMMM',
'LLNNNNNNNNNNNNQQZZZZZZZZTTTTTTTTWWWWWWWNNNNNNNNNNKKKKKKGGRRDDKKKKKKKKGGGGGUUUUCCCCCCCCCCCCCCCCDDDDDDDNKKKKKKKKKKJYYTTTTMMTTMMMMMMMMMMMMMMMMM',
'LLLNTNNNNNTNQNQQCCZZZZZTTTTTTTTTWWWWWWWNNNNNNNNNNKNNKKKGGRRRDDKKKKKKKUGGGUUUUUCCCCCCCCCCCCCCCCDDDDDNNNNNKKKKKKKKBYYTTTTMTTTTTTMMMMMMMMMMMMMM',
'LLLLTTNNNNTTQQQQQQZZZZTTNTTTTTTWWWWWWNNNNNNNNNNNNGGGGKGGGGGCDKKKKKKKKUGGUUUUUCCCCCCCCCCCCCCCCCDDDDDDNNNNKKKKKKKKKYYTTTTTTTTTMMMMMMMMMMMMMMMM',
'LLLLLTNNNNTTQTQQTTTTTTTTTTTTTTTWWWWWWWNNNNNNNNNNNNGGGGGGGCCCCCKKKKKKUUUUUUUVUCCCCCCCCCCCLCCCCCDDDDDDDDDDKKKKKKKKYYYTTTTTTTTTNNNMMMMMMMKKMMMM',
'LLLLLTNNNNTTTTQTTTTTTTTTGTTTTTKKKWKKKWNNNNNNNNNNNNNGGGGGGGCCCCKKKKKKUUUUUUUVVCCCCCCCCCCLLCEECCDDDDDDDDDKKKKKKKYYYYYTTTTTTTTNNNNNKKKKKKKKKKKK',
'LLLLLTTTNNTTTHBTHTTTTTTTGTTTTKKKKKKKKWNNNNNNNNNNNNNGGGGGGGXCCCCKKKKKUUUUUUZVVCCCCCLCCLLLLLLEDDDDDDDDDDDKKKKKKKYYYYYTTTTTTTTTENNNKKKKKKKKKKKK',
'LLLLLLLTTTTHHHHHHHTTTTTGGTGKKKKKKKKKKWWNNNNNNNNNNNGGGGGGGGCCCCKKKBBKUVVVVZZVCCCCFFLLLLLALZBDDDDDDDDDDDDKKKKKKKYYYYYTTTTTTTNNNNNNNKKKKKKKKKKK',
'TTTTTTLTTTHHHHHHHHHTTTTTGGGKKKKKKKKKKWWGNNGNNNNNNNNNGGGGGGCCCCCKKKCCUVVVVVVVVVCFFFFLLLLAZZZZZDDDDDDDKKKKKKKKYYYYYYYYTTTTTTNNNNNNNKKPKKKKKKKK',
'TTTITTTTTTHHHHHHHHTTTTTTGGKKKKKKKKKKKGGGGGGNNNNNNNNNNGGGGCCCCCCCCCCCUUUVVVVVVVVVVFFLLLLAAZZZZZDVDDDKKKKKKYYYYYYMYYTTTYTTTTTNNNNNNNKKKKKCKKKN',
'TTIIIIIIIIIIIIIHHHTTTTTTTACKPKKKKKKPKGGGGGGGNNNNNNNNNGGGGCCCCCCCCCCCCUUVVVVVVVVVVVRHHLLLZZZZZZZZDKKKKKKKKYYYYYYMMYYYYYYTTTNNNNNNNNNKKKKKKKNN',
'TTTIIIIIIIIIIHHHHHHTTTTTAAKKKKKKKKPPPGGGGGGGGGNGGNNNNGGGXCCCCCCCCCCCCCCVVVVVVVVVVVRRRRRLLZZZZZZZDZZZKKMMKMMYMMMMMMYYYYYYYYNNNNNNNNNNNNKKNNNN',
'TTIIIIIIIIIIIIPHAATTTTTAAAUKKKKKTPPPGLLGGGGGGGGGNNNKKKGXXXKCCCCCCCCCCVVVVVVVVVVRRRRRREEZZZZZZZZZZZZZKKMMMMMMMMMMMMYYYYYYYYNNNNNNNNNNNNNNNNNN',
'TTIIIIIIIIIIIIIIAAATTTAAAUUUKKTTTTPPGGGGGGGGGGGSKKKKKKKXXXCCCCCCCCCCVVVVVVVVVVVVRRRRRRRZZZZZZZZZZZZZKKMMMMMMMMMMMYYYYYYYYYYNNNNNNNNNNNNNNNNN',
'IIIIIIIIEEEIIIIIAAAAAAAAUOUUKKJTTTPPGGGGGGGGGGGSKKKKKKXXXXCCUCCCCCCCVVVVVVVVVVVVRRRRRRRZZZZZZZZZZZZZKMMMMMMMMMMMMMYYYYYYYYYYNANNNNNNNNNNNNNN',
'EERIIEEEEEBEIIIAAAAAAAUUUUUUUUJJTTTJJJGGGGGGGGGGGKKKKKXXXXXXCCCCCCCCVVVVVVVVVVRRRRRRFRRZEZZZZZZZZZZZKKKMMMMMMMMMMMYYYYYYYZZZZZZZNNNNNNNNNNXX',
'EEEIIEEEEEEEEEEEEAAAAUUUUWWNUUJJTTTTJGGGGGGGGGGGGKKKKXXQXXXQCCCCCQCCVVVVVVVVVRJJRRRRRRRZEEEZZZZZZZZKKKMMMMMMMMMMMMYYYYYTTZZZZZZZNNNNANTNNXXX',
'EEECEEEEEYEEEEEAEAAAAUULLWWWWLTTTTTTTGGGGGGGGGGGGKKKKKKQXQQQCCQCQQCCVVVVVVVVRRRRRRRRRRRRERRZZZZUZKKKKKHMMMMMMMMMPMMTTTTTTZZZZZZZAANNATTXXXXR',
'EEECEEEEEEEEEEJAAAAAAAUOOOOWWLLTTTTVGGGGGGGGGGGKKKKKKKKQQQQQQQQQQQCCCVVVVVKKRRRRRRRRRRRRRRIPBZZUZKKKKHHMMMMMMMMMMTTTTTTTTZZZZZZZAANNAARRRRRR',
'EEEEEEEEEEEEEEAAAAAAAAUOOOOWWLLLQUTVGGGGGGGGGGKKKKKKKKKQQQQQQQQQQQQCVVVVVVKKKRRRRRRRRRRRRIIPPPPPPKKKKHHHHMMMMMMMMMTTTTTTTZZZZZZZAAANARRRRRRR',
'EEEEEEEEEEEEEEEVAAAAAAPOOOOLLLLQQQLQGGGKGKKKKGTTKKKKKKKQQQQQQQQQKQQCCVVVVVKKKRRRRRRRRRRRRRPPPPPLPKKHHHHHHMMMMMMMMMTTTTTTTTOAZZZZAAAAAARRRRRR',
'EEIEEEEEEEEEEEEEAAAAAAOOOLLLLQQQQQQQGGQKKKKKKEETTKKKKKQQQQQQQKKKKQQQVVVVVKKKKRRRRRRRRRRRRPPPPPPPPHHHHHHHHMMMMMMOMOTTTTTTTTHAZZZZAHAAARRRRRRR',
'CEIEEEEEEEEEEEEEAAAAAAALLLLLLQQQQQQQGGQKKKKKKEETEKKWWKQQQQQQKKKKKKQKKVVKKKKKKKKKKKKKRRRRRPPPPPPPPPHHHHHHHHMMMMMOOOOTTTTTTCCCCCCCCCAAARRRRRRR',
'BBBBEEEEEEEEEEAAAAAAAAAALLLQQQQQQQQQQQQQQQQKKEETEEWWWQQQQQQKKKKKKMKKKVVKKKKKKKKKKKKKRBRRHVHHPPPPPPHHHHHHHMMMMMMMMMTTTTTTTCCCCCCCCCAAAARRRRRR',
'BBBEEEWEEEEEEEEEAAAAAAAALLLQQQQQQQQQQQQQQKKKKEEEEEWWWWWQQQQKKKKKKKKKKKKKKKKKKKKKKKKKRBKRHHHHPPPPPPRHHHHHRQMIMMMMMQTTTTTTTCCCCCCCCCHRRRRRRRRR',
'BBBBEEEEEEEEAAAEAAAAAAAALLQQQQQQQQQQQQQQKKEEEEEEEEWWWWWWWKKKKKKKKKKKKKNKKKKKKKKKKKKKKKKRHHHHPPPPPPPHHHHHQQVMMMMPPTTTTTTTTCCCCCCCCCHRRRRRRRRR',
'BBBBEEHEEEEEAAAAAAAAAAALLLSZQQQQQQQQQQQQQQEEEEEENEEWWWWWKKKKKKKKKKKKKNNKNNCKKKKCKKKKKKKHHHHHPPPPPPPHHHHHQQQLMMMMPPTTTTTTTCCCCCCCCCOORRRRRRRR',
'BBHHHHHHEAAEAAAAAAAAAAAALLSZQQQQQQQQQQQQQQEEEEEEEEEEHWWWKKKKKKKKKKKKKKNKNNCCCCCCCCKKKKKKHHHHHHPPPPDHHSSHQQLLLLMPPPTTTTTTTCCCCCCCCCOORRRRRRRR',
'BBHHHHAHEAAAAAAAAAAAAAAAASSZQQQQQQQQQQQQQUEUEEEEEEEHHWWWWEKKKKKKKKKKKKNNNNCCCCCCCCKKKKKKHHHNNHPPPPPHHSSQQQLLMMMPPPTTTTTTTCCCCCCCCCOOOOORRRRF',
'BBHHHHAAAAAAASSAAAAAAAAAYSSSSQQQQQQQQQQQUUUUUEEEBEHHEEEEEEEKKKKKKKKKKKKKNNCCCCCCCCKKKKHHHHHNNNXPPPPHHSSQQLLMMMMPMPPTTTTTTOOOOHHOOOOOOOOORRRR',
'BBHHHHHHAAAASSSAAAAAAAYYYYSSSSSQQQQQQQQQQUUBBBBBBBHHHHEEEEEKKKKKKKKKKKKKNCCCCCCCCCCKKHHHHHNNNXXRRPXHSSSQQLMMMMMMMPPTTTTSZZOOOOOOOOOOOOOOORDD',
'BBHHHHHJJAAAASSSSSSSYAAYYYYSSSQQQQQQQRQQQUUUUUBBBBBHHHEEEEEEEEEKKKKOOZCZNCCCCCCCCCCKKKHHHHNNNXXXXXXXSSSMSSMMMMMMMPPTTTTTZZOOOOOOCOOOOOOOOOOD',
'HJHHHHJJJJAAASSSSSSSYYYYYYYYYYQQQRQQQRRRUUUUBBBBBBBBHHEEEEEEEXXXXXXXZZZZZCCCCCCCCCCCCHHHNNNNXXXXXXXSSSSSSMMMMMMMMWPTTTTZZZZOOOOOCOOOOOOOOOCO',
'HHHHHJJJJJSSSSSSSSSSYYYYYYYYYRRQRRRRRRRRUUUUBBBBBBBBBHHHEEEEEXXXXXXXZZZZZCCCCCCCCCCCCCHHHNNNRXXXXXSSSSSSSSMMMMMMWWPTTTTZMZZZOOCCCCOOOOOOOOOO',
'HHHHJJJJJJJSSSSSSSSSSYYYYYYYYRRRRRRRRRRRUUQUUBBBHHBBHHEEEEEEWXXXXXXXZZZZZCCCCCCCCCCCCCCCHPPNNXXXSSSSSSSSSSMMMMMMWWWTTTTTZZZZCCCCCCCCOOOOOUOU',
'HJJHJJJJJJJMSSSSSSSSSSYYYYYYYYRRRRRRRRRRRUQUUHHBHHBHHHHEEEWWWXXXXXXXZZZZZCCCCCCCCCCCCCYYCPPPPPSSSSSSSSSSSSMMMMMMWWMTTTTTZCCCCCCCCCCCOOUUUUUU',
'JJJJJJJJJJJJJSSSSSSSSSSYYYYYYYRRRRRRRRRRQQQQHHHHHHHHHHHEEEWWXXXXXXXXZZZZZCCCCCCCCCCCCCCCCPPPPPSSSSSSSSSSSMMMMMMMMMMMTTTTZCCCCCCCCCCCQCUUUUUU',
'JJJJJJJJJJJJJSSSSSSSIISYYYYYYYRRRRRRRRRRRPQQQHHHHHHHHHHEEHHWXXXXXXXXZZZZZKKNCCCCCCCCCCPPPPPPPPSSSSSSSSSSMMMMMMMMMMMMMTTTTCCCCCCCCCCCCCUUUUUU',
'JJJJJJJJJJJJJSSSSIIIIIIYYYYRRRRRRRRRRRRRRPPQPPHHHHHHHHHHEEHWXXXXXXXXZZZZKKKKKKCCCCCCCOPPPPPPPPPPSSSSSSSSMMMMMMMMMMMMMTTTTCCCCCCCCCCCCUUUUUUU',
'JJJJJJJJJJJPPPIIIIIIIIYYIIIRRRRRRRRRRRRCCPPPPHHHHHHHHHHHHHHHXXXXXXXXZZKKKKWKKKKCCCCCPPPPPPPPPPPASSSSSSSSSKMMMMMMMMMMMTTTTTCMCCCCCCCCCUUUUUUU',
'JJJJJJJJJJJQIIIAAAAAAAAIIEEEREBRRRRRRRRCCPCPCYHHHHHHHHHHHHHHXXXZQZZZZZKCCKKKKKKKKKCQQQQQQQQPPPPSSSSSSSSSMMMMMMMMUMMHHTTTTTTMMCHCCCFCUUUUUUUU',
'JJJJJJAAAAAAAAAAAAAAAAAAAAAARRBRRRRRRCCCCCCCCYHHHHHZHHHHHHHSXXXZZZZZZZKCCKKKKKKKKKWQQQQQQQQPPPPPSSSSSSSSSSMMMMMMMHHHHTTTTTTMMCHCCCUUUUUUUUUY',
'QJJJJJAAAAAAAAAAAAAAAAAAAAAABBBBBBBRRRRCCCCCBHHHZZHZZHHHHHMSXXXSZZZZZCCCKKKKKSKKWKWQQQQQQQQPCCPSSSSSSSSSSSMMHHHMHHHHHTTHTTTMHHHCFCUUUUUUUUUY',
'QJJJJJAAAAAAAAAAAAAAAAAAAAAABBBBBBBBRRRRCCCEBEHHZZZZHHHHHHMSXXXSSZZZCCCCCKKKKKKWWWWQQQQQQQQGCCCCSSSSSSSSSSHHHHHHHHHSSSTHTVVMHHUUFFFUUUUUYUUY',
'AAAAAAAAAAAAAAAAAAAAAAAACCBBBBBBBBBBRRRCCCCEEEEZZZZZHHHHHHMSXXXSSSZSSCCCCKKKKKKWWWWQQQQQQQQCCCCCCCESSSSSSSSHHHHHHHHSSSHHHHVVUUUUUFUUUUUYYUYY',
'AAAAAAAAAAAAAAAAAAAAAAAACCBBBBBBBBBBBRRRDCSBEBEEEZZZZZHHHHMSXXXSSSSSSSSCCKOKWKWWWWWQQQQQQQQQQQQCCEEEESVSSEHHHHHHHHHSSHHHHHVVUUUUUUUUUUUUYYYY',
'AAAAAAAAAAAAAAAAAAAAAAAACBBBBBBBBBBBBBRRDDBBBBBEEEXXZZHMMMMMSPPPSSSSWWWKKKKKWWWWWWQQQQQQQQQQQQQCEEEEEEEEEEHHHPHHHHHHHHHHHVVUUUUUUUUUUUUUYYYY',
'AAAAAAAAGGGGGGAAAAAAAAAABBBBBBBBBBTBTBDDDDBBBBBBBEHHHHHMPPPPPPPPSSSWWWWKWKKWWWWWWQQQQQQQQQQQQQQEEEEEEEEEEEHHHHHHHHHHHHHHHVVVVUUUUUUUUUUUYYYY',
'AAAAAAAAGGGGGGAAAAAAAAAABBBBBBBTTBTTTMDDDDBBBBBBBBHHHHMMPPPPPPPPPPPPPPWWWWWWWWWWWQQQQQQQQQQQQQQEEEEEEEEEEEEHHHHHHHHHHHHHVVVVVUUUUUUUUUHHYYYY',
'GGGGGGGGGGGGGGAAAAAAAAAAZBBBBBBTTBTTTTTDDDBRBBBBBBHHHMMMPPPPPPPPPPPPPPWWWWWWWWWCWQQQQQQQQQQQQQQPPPPEPPPEEEEXHHHHHHHUHVVHVVVVVVUUUUUUHHHHHHHY',
'GGGGGGGGGGGGGGAAAZZZZZZZZBBBTTTTTBTTTTTDDDDBBBBBBBHHHMMJPPPPPPPPPPPPPPKWWKKWWWCCCQQQQQQQQQQQQQQPPPPPPXXXXXEXXIXXXHUUVVVVVVVVVVUUUUUUUHHHHHHH',
'GGGGGGGGGGGGAAAAAZZZZZZZZBBBTTTTTTTTTTTTTDDBBBBBBBHHHHMJPPPPPPPPKKKKKKKWKKKKWWCCCQQQQQQQQQQQQQQPPPPPPXXXXXXXXXXXUUUUVVVVJJVVVVVVVUVUUHHHHHHH',
'GGGGGGGGGGGGAAAAAAAZZZZZZZRRRTTTTTTTTTTTLBBBBBBBBBBBMMMJPPPPPPPPKKKKKKKKKKCCCCCCCQQQQQQQQQQQQQQQQQQPPXXXXXXXXXXXXUUUUUVJJJJJJVJVVVVVVHHHHHHH',
'YYGGGGGGGGGGAAAAAAAZZZZZZZZRRTTTTTTTTTQTLBBBBBBBBBBMMMMJPPPPPPPPPKKKKKKKKKCCCCCCCQQQQQQQQBBQQQQQQQQPPXXXXXXXXXYXXUUUUJVJJJJJJJJVVVVVHHHHHHHH',
'YYGGHGGGGGGGAAAAAAZZZZZZZRRRTTTTTTTTTTQQBBBBBBBBBBBBBBMJPPPPPPPPPKKKKKKKKKCCCCCCCQQQQQQQQBBQQQQQQQQPPPXXXXXXXXXUUUUUUJPJJJJJJJVVVVVVVHHHHHHH',
'YYPGHGGGGGGHADDAAAWZZZZZZZZRRTTTTTTTTTQQBBBBBBBBBBBBEEMJPPPPPPPPPKKKKKKKKKCCCCCCCQQQQQQQQBBGGGPPPPPPPPXXXXXXXXXUUUUUUJJJJJJJJJVVVVVHHHHHHHHH',
'PPPPHHHHGGGHHHMAAAAZZZZZHHHTTTTTTTTTTTQQBBBBBBBBBBOBOEMJJJJJJJKKKKKKKKKKIICCCCCCCCCCCCCBBBBGGGGHPPPPPXXXXXXXXXXUUUUUJJJJJJJJJCJJVVVVHHHHHHHH',
'PPHHHHHHHGGHMMMMMMMZZZHHHHHTTTTTTTTTTTTTTTBBBBBBBOOOOOWJJJJJJJJJJJJJJKKKIICCCCCCCCCCCCCBBBBGGGGGWLLLLXXXXXXXXXXUUUJJJJJJJJJJTJJJJVUUUHHHHHHH',
'HHHHHHHHHHHHMMMMMMMMMZHHHHHHTTTTTTTTTTTTTEBBBBBBBBBOOOWJJJJJJJJJJJJCCCCCCCCCCCCCHCCCCCCBBBBGGGSLLLLLLXXXXXXXXXXXUUUUUJHHJJJJJJJJJJUUUUHHHHHH',
'HHHHHHHHHHHHSMMMMMMMMZHHHHHHHHTTTTTTTTEEEEEEBBBBBBBBOOWJJJJJJJJJJJJCCCCCCCCCCCCCCCCICCVBBBBLLLLKKKKKKKKKKKKKKKUUUUULLLHHJJJJJJJJUUUUUUHHHHHH',
'HHHHHHHHXHDHSMMMMMMMMMMHHHHUHTTTTTTTTTEEEEEEHHDBBBBDOOLWLLLLJJJJJJJCCCCCCCCCCCCCICCIMHHBBBBKLLLKKKKKKKKKKKKKKKXXULUULLJJJJJJJJJUUUUUUUUHHHHH',
'HXXXHHHHHHHHMZMMMMMMMMMHUUUUUWTTTTTTTTEEEHEEHDDBBDDDOLLLLLLLJJJJJJJCCCCCCCCCCCCIIIIIIKKBBBBKLLLKKKKKKKKKKKKKKKXILLLLLLLJJJJJJJUUUUUUUUUUUHHH',
'HHXQXXXXHHQQMMMMMMMMMMUHUUUUUWBTTTTTNBBEHHHHHDDDDDDDLLLLLLLLJJJJJJJCCCCCCCCCCCIIIIIIIKKKKLLLLLLKKKKKKKKKKKKKKKXIILIILLIJJJJJJUUUUUWWWUUUHHHH',
'HXXXXXNNHHQQQMMMMMMMMUUUUUUUUBBTTBBBBBBEEHHHHDDDDDSDLLLLLLLLJJJJJJJCCCCCCCCCCCIIIIIIIIKKLLLLLLLKKKKKKKKKKKKKKKXIIIIIIIIIJJJJJUUUUUWWWWWWWWWH',
'XXXXXXXNNNXQCCCCCMMMDUUBUUUUUUBBBBBBBBBEEHHHHHHHSDSDDDDLDLLCJJJJJJJCCCCCCCCCCCJIIIIIIIIKKKKLLLLKKKKKKKKKSUXIIIIIIIIIIIIIJJJJJJUUUWWWWWWWWWWH',
'XXXXXXXXXXXXCCCCCCCDDUUUUUUUUUBBBBBBBBBBEHHHHHHHSSSSDSSSDDNNJJJJJJJCCCCCCCCCCCJIIIIIIIIIKKKLLLLKKKKKKKKKRSIIIIIIIIIIIIIIIIJJJJUUUWWWWWWWWWHH',
'XXXXXXXXXXXXCCCCCCCIDUUUUUUUUUUBBBBBBBBBBDDHHHHSSSSSSSSSSDDDNNNNNNNCCCCCCCCCCCJIIIIIIIHIIKLLLLLLSSSSSSSSSSIIIIIIIIIIIIIIIDDJJDDUUUWWWWWWWWHH',
'XXXXXXXXXXXXOCCCCCCIDUUUUUUUUUUBBBBTTBBBBDDSSHSSSSSSSSSSSSSNNNNNNNNNCCCCCCCCCCJJJJIIIHHHHLLLLLLSSSSSSSSSSSIIIIIIIIIIIIIDIIDJJDDDUUWWWWWWWWWW',
'XXXXXXXXXXXXOOHHHHHIIIIUUUUUUUUUBBBNTBNBDDSSSSSSSSSSSSSSSPPPNNNNNNNNCCCCCCCCCCJJJHHHHHHHHLLLLLLSSSSSSSSSSSSIIIIIIIIIIIIDDIDDDDDDDDDWWWWWWWWW',
'XXXXXXXDXXXXXOHAHHHHIIUUUUUUUUUUBBBNNNNNSSSSSSSSSSSSSSSPPPPPNNNNNNNNCCCCCCCCCCJJJHHHHHHHHLLLLLLSKSSSSSSSSSSIIIIIIIIIIIIIDDDDDDDDDDWWWWWWWWWW',
'XXKXXXXDDXXOOOHHHHQHWIIUUUUUUUUUUGGGNNNNNNNSSSSSSSSSSQHQPPQQQNNNNNNNCCCCCCCCCCJJJJHHHHHHHHHLLLLLSSSSSSSSSIIIIININIIIIIIDDDDDDDDDDDDWWWWWWWWW',
'NXXTXXTTTXXOOOHHHHHHHIIUUUUUUUUUUGEGNNNNNNNSSSSSSSSSSQQQQPQQQQQQNNNNCCCCCCCJJJJJCJHHHHHHHLHLLLLLVVSSSSSSSIIIINNNNIIIIIIDDDDDDDDDDDDWWWWWWWWW',
'XXTTTTTTTTOOOOHHHHHHHIIIUUUWMUUUUJGGNNNNNNPPSSPSSSSSQQQQQQQQQQQQNNNNNNNJJJJJJJJJJJHHHHLLLLLLLLLLVVSSSSSYYYINNNNNNICIIIIDDDDDDDDDDDWWWWWWWWWW',
'TXTTTTTTTTTOFFFHHHHIIIIIUWWWWWWUWGGGNNNNNNPPSPPPSSSSQQQQQQQQQQQQQNNNNNNJJJJJJJJJJJHHHHLLLHLLLLLLSSSSSSSSSYNNNNNNNCCCCICDDQQQQPDDDDYWWWWWWWWW',
'TXTTTTTTTTTOIJFFHHHIIIIIWWWWWWWWWWWGWNNNPPPPPPPPSSSQQQQQQQQQQQQQNNNNNNNNJJJJJJJJJJJJHHHHLHHHLLHYYYSSSSSYYYNNNNNCCCCCCCCQQQQQQQDDDDDWWWWWWWWS',
'TTTTTTTTTTTTIFFFIHIIIIWWWWWWWWWWWWWWWNUPPPPPPPPPSSSQQQQQQQQQQQQNNNRNNNNNJJJJJJJJJJJHHHHHHHHHHLHYYYSSYSSYYYYYNNNCCCCCCCCCQQQQQQDDDIIWWWWWWWWS',
'TTTTTTTTTTTTIIIIIIIIIWWWWWWWWWWWWWWHHHUPPPPZPPPPPSSQQQQQQQQQQQQNNRRNRRRRFFFFJFFJJHHHHHHHHHHHHHHHYYYYYYYYYYYYYNNCCCCCCCQQQQQQQDDIIIIWJWWWXWWW',
'TTTTTTTTTTTTIIIIIIIIIWWWWWWWWWWWWWHHHHUPPPPPPPPPPPPPLLQQQQQQQQQQRRRRRRRRFFFFFFFFHHHHHHHHHHHHHHHHHYYYYYYYYYYYAANDCCCCCCCQQQQIIIIIIIIWJWWWXWWW',
'TTTTTTTTTTTTIIIIIIMMIUWWWWWWWWWWWWHHHHUPPPPPPPPPPPPPQQQQQQQQQQAARRRRRRRRRFFFFFHHHHHHHZZHHHHHHYYYYYYYYYYYYYYYAAAAACCCCCCCCHYYIYIITIIWWWIWWWRQ',
'TTTTTTTTTTTTTIIIIIMYWWWWWWWWWWWHHHHHHHHPPPPPPPPPPPPPQQQQQQQQQQAQRRRRRRRRRRFFHHHHHHHHZZZZHHHHHYEEYEYYYYYYYYAAAAAACCCCCCCCCCCYIYIITTIIIIIWIIRQ',
'TTTTTTTTTTTTBIIIIIMMMMWWWWWWWWWWHHHHHHHHZPPPPPPPPPOOQQQQQQQQQQQQTRRRRRRRRRRRHHHHHHRZZZZZZPHHHYEEEEEYYYYYYYYYAAAACCZOOCCCCCCYYYIITIIIIIIIIRRQ',
'TTTTTXXXBTVVJIIIIIMMMWWWWWWWWWWHHHHHHHHHPPPPPPPPPPPOQQQQQQQQQQQQTTRRRRRRRRHHHHHHHZZZZZZZPPEEEEEEEEYYYYYYYYYAAAAZZZZOOOOCCCCCTTTTTTTTTIIIIIRQ',
'TTTTXXXXXXJVJJIIIMMMWWWWWWWWWWHHHHHHHNHHPPPPPPPPPPPOOOOOQOQQQQQOOTORRRRRRRRRHHHHZZZZZZZZEEEEEEEEEYYYYYYYYYYYYAAZEZZZOOOOCCCCCTTTTTTTTTTTTTRR',
'TTTXXXXXJJJVJJIIIIMVVVWWWWWWWHHHHHHHHHHHOPPPPPPPPOPOOOOOOOOQQOOOOOORRRRRRRHHHHHHHZZZZZZZYEEEEEEEYYYYYYYYYYYYYKAEEZZZOOOOOOIITTTTTTTTTTTTTTRR',
'TXXXXXXYYJJJJIIIIIIVVVWWWWWWWHHHHHHHHHHHOPPOPPOPOOOOOOOOOOQQQOOOOOORRRRRHHHHHHHHHZZZZZZYYEEEEEEEEEIYYYYYYYYYYKKTEEEEOOOOOOITTTTTTTTTTTTRRRRR',
'TXXXXXXXYJJJJJIJIIIVVVVWWWWWWHHHHHHHHHHOOOOOPOOOOOOOOOOOOOOQOOOOOOORRRRRHRHHHHHHHHHZZZZYYYYEEEEEEEYYYYYYYYYOOKKKEEOOOOOOOOITTTTTTTTTTTTRRRRR',
'TXTXXXXXYYJJJJJJVVVVVVWWWWWWWWHHHHHHHHHHOOOOOOOOOOOOOOOOOOQQOOOOOOORRRRRRRHHHHHHHHHHHHZYYYEEEEEEEYYYYYYYYYYOOOOOOOOOOOOOOOIITTTTTTTTTTRRRRRR',
'TTTXXXXXXXJJJJJVVVVVVVVVWWWWWWHFFFFFFFHHHOOOOOOOOOOOOOOOOOOQOOOOOQORRRRRRRHHHHHHHHHHHHHHYYEEEMEEMMYYYYYYYYYYOOOOOOOOOOOOOOIIITTTTTTTTRRRRRRR',
'TTTXXXXXXZZZJJJVVVVVVVVVWWWWWWFFFFFFFHHLOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRHHHHHHHHHHHHHHYYEEMMMMMYYYYYYYYYYOOOOOOOOOOOQOIIIIITTFFTTRRRRRRRRR',
];
// input = [
// 'AAAA',
// 'BBCD',
// 'BBCC',
// 'EEEC'
// ];

input = [
'EEEEE',
'EXXXX',
'EEEEE',
'EXXXX',
'EEEEE',
];

// input = [
// 'AAAAAA',
// 'AAABBA',
// 'AAABBA',
// 'ABBAAA',
// 'ABBAAA',
// 'AAAAAA',
// ];


const garden = input.map(line => line.split(''));



const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
}
const checkFence = (currentPlant, y, x) => {
  let samePlant = [];
  Object.values(directions).forEach(dir => {
    if(garden?.[y + dir[0]]?.[x + dir[1]] !== currentPlant) {
      samePlant.push(parseInt(y) + dir[0] + ',' + x + dir[1]);
    }
  });
  return samePlant;
}
const checkNeighbours = (currentPlant, y, x) => {
  let points = [];
  let fenceNr = 0;
  Object.values(directions).forEach(dir => {
    if(garden?.[y + dir[0]]?.[x + dir[1]] === currentPlant) {
      points.push((parseInt(y) + dir[0]) + ',' + (parseInt(x) + dir[1]));
    }else{
      fenceNr++;
    }
  });
  return {fenceNr, points};
}

const findNeighbour = (currentPlant, yC, xC, checkedPoints) => {
  let key = -1;
  let rest = -1;
  plots.forEach((area, k) => {
    const samePlants = [];
    if(area.plant === currentPlant) {
      Object.keys(area.points).forEach(point => {
        const [y, x] = point.split(',');
        Object.values(directions).forEach(dir => {
          if(parseInt(yC) + dir[0] === parseInt(y) && parseInt(xC) + dir[1] === parseInt(x)) {
            key = k;
          }else{
          }
          if(garden?.[parseInt(yC) + dir[0]]?.[parseInt(xC) + dir[1]] === currentPlant) {
            samePlants.push({currentPlant, y: parseInt(yC) + dir[0], x: parseInt(xC) + dir[1]});
          }
        });
      });
    }

    if(key === -1 && samePlants.length) {
      checkedPoints = checkedPoints || {};
      checkedPoints[yC + ',' + xC] = 1;
      samePlants.forEach(plant => {
        if(!checkedPoints[plant.y + ',' + plant.x]) {
          checkedPoints[plant.y + ',' + plant.x] = 1;
          resp = findNeighbour(plant.currentPlant, plant.y, plant.x, checkedPoints);
          if(resp !== -1) {
            key = resp
          }
        }
      })
    }
  });
  return key;
}



let currentPlant = null;
let plots = [];
let pointsNeighbour = [];
garden.forEach((vertical, y) => {
  vertical.forEach((item, x) => {
    currentPlant = item;
    pointsNeighbour[y + ',' + x] = checkNeighbours(currentPlant, y, x);
  });
});

const navigate = (point) => {
  let newPoints = {};
  const { points, fenceNr } = pointsNeighbour[point];
  if(processed.indexOf(point) === -1) {
    newPoints[point] = fenceNr;
    processed.push(point);
    if(points.length) {
      points.forEach(p => {
        if(processed.indexOf(p) === -1) {
          newPoints = {...newPoints, ...navigate(p)};
        }
      })
    }else {

    }
  }else{
  }
  return newPoints;
}


const processed = [];
let k = 0;
for( let point in pointsNeighbour) {
  if(processed.indexOf(point) === -1) {
    const [y, x] = point.split(',');
    plots[k++] = {plant: garden[parseInt(y)][parseInt(x)], points: navigate(point)}
  }
}

let totalPrice = 0;
let totalDiscountedPrice = 0;

console.log('plots: ', plots)

plots.forEach(plot => {
  const { plant, points } = plot;
  const area = Object.values(points);
  const fenceNr = area.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const areaPrice = area.length * fenceNr;
  console.log('plant: ', plot.plant,  area.length, fenceNr, '=', areaPrice, '###############################################################' )
  totalPrice += areaPrice

  let lowestY = 1000000;
  let lowestX = 1000000;
  let heighestY  = 0;
  let heighestX  = 0;
  const coordinates = [];
  for(let point in points) {
    if(points[point] > 0) {
      const [y, x] = point.split(',')
      if(lowestY > y) {
        lowestY = parseInt(y);
      }
      if(lowestX > x) {
        lowestX = parseInt(x);
      }
      if(heighestY < y) {
        heighestY = parseInt(y);
      }
      if(heighestX < x) {
        heighestX = parseInt(x);
      }
      coordinates.push([parseInt(y), parseInt(x)]);
    }
  }

  console.log(
    'lowestY:', lowestY,
    'heighestY:', heighestY,
    'lowestX:', lowestX,
    'heighestX:', heighestX,
  );

  let sides = 0;
  for(let i = lowestY; i <= heighestY; i++) {
    let found = false;
    let count = 0;
    let sum = 0;
    let j = lowestX;
    console.log('START LINE:', i)
     while (j <= heighestX) {
      [[-1, 0]].forEach(dir => {
        if(garden?.[i + dir[0]]?.[j + dir[1]] !== garden[i][j] && garden[i][j] === plot.plant ) { // fence
          if(!found && points?.[i + ',' + j] > 0) {
            sum++;
            found = true;
            points[i + ',' + j]--;
            count = j;
          } else if(found) {
            if(count + 1 === j) {
                points[i + ',' + j]--;
              count = j;
            }else{
              found = false;
            }
          }
        }else{
          found = false;
        }
      });
      j++
    }
    found = false;
    console.log('sum after line top:', sum)
    j = lowestX;
    while (j  <=  heighestX) {
      [[1, 0]].forEach(dir => {
        if(garden?.[i + dir[0]]?.[j + dir[1]] !== garden[i][j] && garden[i][j] === plot.plant) { // fence
          if(!found && points?.[i + ',' + j] > 0) {
            sum++;
            found = true;
            points[i + ',' + j]--;
            count = j;
          } else if(found) {
            if(count + 1 === j) {
              points[i + ',' + j]--;
              count = j;
            }else{
              found = false;
            }
          }
        }else{
          found = false;
        }
      });
      j++
    }

    sides+=sum;
    console.log('line:', i, 'sum', sides)
  }

  console.log('start column', '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  for(let j = lowestX; j <= heighestX; j++) {
    console.log('START COLUMN:', j)
    let count = 0;
    let found = false;
    let sum = 0;
    let i = lowestY;
    while (i  <=  heighestY) {
      [[0, -1]].forEach(dir => {
        if(garden?.[i + dir[0]]?.[j + dir[1]] !== garden[i][j] && garden[i][j] === plot.plant) { // fence
          if(!found && points?.[i + ',' + j] > 0) {
            sum++;
            found = true;
            points[i + ',' + j]--;
            count = i;
          } else if(found) {
            if(count + 1 === i) {
              points[i + ',' + j]--;
              count = i;
            }else{
              found = false;
            }
          }
        }else{
          found = false;
        }
      });
      i++
    }
    found = false;
    console.log('sum after column left:', sum)

    i = lowestY;
    while (i  <= heighestY) {
      [[0, 1]].forEach(dir => {
        if(garden?.[i + dir[0]]?.[j + dir[1]] !== garden[i][j] && garden[i][j] === plot.plant) { // fence

          if(!found && points?.[i + ',' + j] > 0) {
            sum++;
            found = true;
            points[i + ',' + j]--;
            count = i;
          } else if(found) {
            if(count + 1 === i) {
              points[i + ',' + j]--;
              count = i;
            }else{
              found = false;
            }
          }
        }else{
          found = false;
        }
      });
      i++
    }
    sides+=sum;
    console.log('column:', j, 'sum> ', sum)
  }
  console.log('sides', sides)
  totalDiscountedPrice += area.length * sides;
});

console.log('totalPrice: ', totalPrice)
console.log('totalDiscountedPrice: ', totalDiscountedPrice)

console.timeEnd('run:')
