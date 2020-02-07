/*
 * Copyright 2000-2020 Sergio Rando <segio.rando@yahoo.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * EN
 * 
 *   The syllable in the literary language is determined by the principle of as-
 * cending sonority
 *
 *   1. "Graphic" principle, according to which hyphenation is prohibited, which
 * impedes the visual perception of a word or phrase as a graphic whole
 *
 *   1.a. You cannot leave one letter at the end of a line or transfer one line
 * to another line
 *   Transfer is not allowed: a-becedaria, abecedari-a
 *   Transfer allowed: abe-cedaria, abece-daria, abeceda-ria
 *
 *   1.b. It is impossible to break up by letter alphabetical abbreviations,
 * both written in capital letters, and written partly in lowercase, partly in
 * capital or capital with numbers
 *   Transfer is not allowed: UFO, IYKYK, WI-FI, AK-47
 *
 *   2. The "phonetic" principle, that is, the "syllable", according to which
 * hyphenations that make it difficult to read the word are prohibited (it is
 * the syllable that is the unit of reading and writing)
 *
 *   2.a. You can’t transfer to another line or leave at the end of the line a
 * part of the word that does not form a syllable, and also separate the conso-
 * nant from the vowel following it
 *   Transfer is not allowed: br-acelet, brac-elet or abateme-nt, bra-celet
 *   Transfer allowed: brace-let or abate-ment
 *
 *   2.b. (Type 0) The letters 'ь' and 'ъ' cannot be torn off from the previous
 * consonant
 *   Transfer is not allowed: 'фел-ьетон' or 'об-ъявление'
 *   Transfer allowed: 'фель-етон', 'объ-явление'
 * 
 *   2.c. (Type 5) You can’t tear the letter 'y' from the previous vowel
 *   Transfer is not allowed: ba-yman, to-yish
 *   Transfer allowed: bay-man, toy-ish
 * 
 *   2.d. (Type 7,8,9) You can’t tear monophthongs, diphthtongs and consonants (example:
 * Example List:
 * 
 *   *air$ - air,
 *   *aw$ - draw,
 *   *ear$ - ear,
 *   *ere$ - severe,
 *   *ew$ - chew,
 *   *ow$ - allow
 *
 *   *dge$ - bridge
 *   *ge$ - message
 *   *gue$ - league
 *   *tch$ - watch
 *   *the$ - breathe
 *   *ve$ - have
 *
 *   *ai* - raise,
 *   *ar* - smart, seary,
 *   *au* - author,
 *   *ea* - east,
 *   *ee* - week,
 *   *er* - water,
 *   *ir* - stir,
 *   *oa* - coastal,
 *   *oi* - oily,
 *   *oo* - school,
 *   *or* - short,
 *   *ou* - young, sound,
 *   *oy* - toy,
 *   *ur* - urban, rural,
 *
 *   *bb* - rubber
 *   *ch* - cheap
 *   *ck* - brick
 *   *ddl* - middle
 *   *ff* - stiff
 *   *gg* - trigger
 *   *gi* - digital
 *   *ll* - roll
 *   *mm* - summer
 *   *ng* - finger
 *   *nn* - funny
 *   *nk* - blanket
 *   *ph* - phone
 *   *pp* - happy
 *   *qu* - require
 *   *sh* - shout, fish
 *   *si* - execursion
 *   *su* - visual
 *   *th* - think
 *   *tt* - bitter
 *   *tu* - nature
 *   *wh* - why, who
 *
 *   3. "Morphemic" principle, according to which hyphenations should be prefer-
 * red in which the significant parts of the word are not broken if, after the
 * prefix ending in the consonant, there is a vowel 'ы', then the part of the
 * word starting with 'ы' should not be transferred permitted;
 *   This prohibition does not look strange if we recall that the spelling rule,
 * which obliges us to write 'ы' instead of 'и' after prefixes ending in a solid
 * consonant, in itself violates the morphological (morpheme) spelling principle
 *   Transfer is not allowed: 'пред-ыстория'
 *   Transfer allowed: 'преды-стория', or even better 'предыс-тория'
 *
 *   4. Letters type classifications:
 *   - (0) inseparable from the previous one by the rule (ru: 'ьъ')
 *   - (1) deaf noisy consonants (ru: 'кпстфхцчшщ') (en: 'cfhkpqstx')
 *   - (2) voiced noisy consonants (ru: 'бвгджйз') (en: 'bdgjvwyz')
 *   - (3) voiced sonor consonants (ru: 'лмнр') (en: 'lmnr')
 *   - (4) vowels (ru: аеёиоуэюя) (en: 'aeiou')
 *   - (5) inseparable from the previous vowel according to the rule (ru: 'й') (en: 'y')
 *   - (6) inseparable from the previous vowel according to the rule (ru: 'ы')
 *   - (7) inseparable monophthongs
 *   - (8) inseparable diphthtongs
 *   - (9) inseparable consonants
 */

/**
 * RU
 * 
 *    Слогораздел в литературном языке обусловлен принципом восходящей звучности
 *
 *    1. "Графический" принцип, согласно которому запрещаются переносы, затруд-
 * няющие зрительное восприятие слова или фразы как графического целого
 * 
 *    1.а. Нельзя оставлять в конце строки или переносить на другую строку одну
 * букву
 *    Перенос запрещен: о-кончание, окончани-е
 *    Перенос разрешен: окон-чание, оконча-ние
 * 
 *    1.б. Нельзя разбивать переносом буквенные аббревиатуры, как пишущиеся од-
 * ними прописными буквами, так и пишущиеся частью строчными, частью прописными
 * или прописными с цифрами (например: НЛО, СПбГУ, ТУ-104)
 *
 *    2. "Фонетический" принцип, то есть "слоговом", согласно которому запреща-
 * ются переносы, затрудняющие чтение слова (именно слог является единицей чте-
 * ния и письма)
 * 
 *    2.а. Нельзя переносить на другую строку либо оставлять в конце строки ча-
 * сть слова, не составляющую слога, а также отделять согласную от следующей за
 * ней гласной
 *    Перенос запрещен: кр-асота, крас-ота или сохрани-ть
 *    Перенос разрешен: кра-сота, красо-та или сохра-нить
 * 
 *    2.б. (Тип 0) Нельзя отрывать буквы ь и ъ от предшествующей согласной
 *    Перенос запрещен: фел-ьетон или об-ъявление
 *    Перенос разрешен: фель-етон, объ-явление
 * 
 *    2.в. (Тип 5) Нельзя отрывать букву й от предшествующей гласной
 *    Перенос запрещен: сто-йте, мо-йка
 *    Перенос разрешен: стой-те, мой-ка
 * 
 *    3. "Морфемный" принцип, согласно которому следует предпочитать такие пере-
 * носы, при которых не разбиваются значащие части слова если же после пристав-
 * ки, оканчивающейся на согласную, стоит гласная ы, то переносить часть слова,
 * начинающуюся с ы, ни в коем случае не разрешается;
 *    Это запрещение не выглядит странным, если вспомнить, что орфографическое
 * правило, обязывающее нас писать ы вместо и после приставок, оканчивающихся на
 * твердый согласный, само по себе нарушает морфологический (морфемный) принцип
 * правописания
 *    Перенос запрещен: пред-ыстория
 *    Перенос разрешен: преды-стория или, еще лучше, предыс-тория
 *
 *    4. Классификация букв и созвучий
 *    - (0) - неотделяемое от предидущего по правилу (ru: ъь)
 *    - (1) - глухие шумные согласные (ru: кпстфхцчшщ) (en: cfhkpqstx)
 *    - (2) - звонкие шумные согласные (ru: бвгджйз) (en: bdgjvwyz)
 *    - (3) - звонкие сонорные согласные (ru: лмнр) (en: lmnr)
 *    - (4) - гласные (ru: аеёиоуэюя) (en: aeiou)
 *    - (5) - неотделяемое от предидущего по правилу гласная (ru: й) (en: y)
 *    - (6) - неотделяемое от предидущего по правилу гласная (ru: ы)
 *    - (7) - неотделяемые гласные (образующие один гласный звук)
 *    - (8) - неотделяемое двугласное (похоже на тип 5 в русском)
 *    - (9) - неотделяемое созвучие (звучащее как один согласный звук)
 */

const ASCII = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//             |EN                      ||RU                             |
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const LOWER = "abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const TYPES = "42124121421333411311422142422224422451333413114111111060444";
const UPPERLOWER = UPPER + LOWER;
const TYPESTYPES = TYPES + TYPES;

const reMonophthongsEnd = /(aw|er|ew)$/ig
const reDiphthtongsEnd = /(air|ear|ere|ow)$/ig
const reConsonantsEnd = /(dge|ge|gue|tch|the)$/ig
const reSilientEnd = /(ce|de|re|se|ve)$/ig

const reMonophthongs = /(ar|au|ea|ee|er|ir|oo|or|ou|ur)/ig
const reDiphthtongs = /(ai|oa|oi|ou|oy)/ig
const reConsonants = /(bb|ch|ck|ddl|ff|gg|gi|ll|mm|ng|nn|nk|ph|pp|qu|sh|si|su|th|tt|tu|wh)/ig
const reNasalDorsovelar = /(ang|eng|ing|ong|ung|yng)/ig

/**
 * @param {RegExp} regex 
 * @param {string} charWord 
 * @param {string} typeWord 
 * @returns {string}
 */
function monophthongs(regex, charWord, typeWord) {
	let reaRes;
	while ((reaRes = regex.exec(charWord)) !== null) {
		let ofs = reaRes.index;
		let len = reaRes[1].length;
		typeWord = typeWord.substr(0, ofs) + (typeWord[ofs] == '0' ? '0' : '4') + '00'.substr(-(len - 1)) + typeWord.substr(ofs + len);
		regex.lastIndex = ofs + 1;
	}
	return typeWord;
}

/**
 * @param {RegExp} regex 
 * @param {string} charWord 
 * @param {string} typeWord 
 * @returns {string}
 */
function diphthtongs(regex, charWord, typeWord) {
	let reaRes;
	while ((reaRes = regex.exec(charWord)) !== null) {
		let ofs = reaRes.index;
		let len = reaRes[1].length;
		typeWord = typeWord.substr(0, ofs) + (typeWord[ofs] == '0' ? '0' : '4') + '55'.substr(-(len - 1)) + typeWord.substr(ofs + len);
		regex.lastIndex = ofs + 1;
	}
	return typeWord;
}

/**
 * @param {RegExp} regex 
 * @param {string} charWord 
 * @param {string} typeWord 
 * @returns {string}
 */
function consonants(regex, charWord, typeWord) {
	let reaRes;
	while ((reaRes = regex.exec(charWord)) !== null) {
		let ofs = reaRes.index;
		let len = reaRes[1].length;
		typeWord = typeWord.substr(0, ofs + 1) + '00'.substr(-(len - 1)) + typeWord.substr(ofs + len);
		regex.lastIndex = ofs + 1;
	}
	return typeWord;
}

/**
 * @param {string} charWord 
 * @param {string} typeWord 
 * @param {string} symbol 
 * @returns {string}
 */
export function hyphenWord(charWord, typeWord, symbol) {
	// Предварительная обработка слова по 7 8 и 9 типам

	typeWord = monophthongs(reMonophthongsEnd, charWord, typeWord); // type 7 translates to type 40
	typeWord = diphthtongs(reDiphthtongsEnd, charWord, typeWord); // type 8 translates to type 45
	typeWord = consonants(reConsonantsEnd, charWord, typeWord); // type 9 translates to type ?0
	typeWord = consonants(reSilientEnd, charWord, typeWord); // type 9 translates to type ?0
	typeWord = monophthongs(reMonophthongs, charWord, typeWord); // type 7 translates to type 4
	typeWord = diphthtongs(reDiphthtongs, charWord, typeWord); // type 8 translates to type 45
	typeWord = consonants(reConsonants, charWord, typeWord); // type 9 translates to type ?0
	typeWord = consonants(reNasalDorsovelar, charWord, typeWord); // type 49 translates to type 400

	// Разбиваем на звуки charWord и typeWord в формат без 0
	let charPhonemes = [];
	let typePhonemes = [];
	let wordOfs = 0;
	let phonemeOfs = 0;
	let charAlpha, charType;
	while (wordOfs < charWord.length) {
		charAlpha = charWord.charAt(wordOfs);
		charType = typeWord.charAt(wordOfs);
		if (charType != '0') {
			if (typePhonemes[phonemeOfs] !== undefined)
				phonemeOfs++;
			typePhonemes[phonemeOfs] = charType;
		}
		if (charPhonemes[phonemeOfs] === undefined)
			charPhonemes[phonemeOfs] = charAlpha;
		else
			charPhonemes[phonemeOfs] += charAlpha;
		wordOfs++;
	}

	let charSyllables = [];
	let typeSyllables = [];
	let syllableOfs = 0;
		phonemeOfs = 0;
	let prevTypePhoneme = '';
	let charPhoneme, typePhoneme;
	//    Выделяем группы между гласными
	// Производим предварительную разбивку на псевдо-слоги
	// Ищем первую гласную, до неё все буквы неразрывны
	charSyllables[syllableOfs] = '';
	typeSyllables[syllableOfs] = '';
	while (phonemeOfs < charPhonemes.length) {
		charSyllables[syllableOfs] += charPhonemes[phonemeOfs];
		typePhoneme = typePhonemes[phonemeOfs];
		typeSyllables[syllableOfs] += typePhoneme;
		phonemeOfs++;
		if ((typePhoneme == '4') || (typePhoneme == '6'))
			break;
	}
	while (phonemeOfs < charPhonemes.length) {
		let charPart = [];
		let typePart = '';
		let partIndex = 0;
		// Если не достигли конца слова - ищем гласную, запоминая содержимое
		// между ними
		prevTypePhoneme = typePhoneme;
		while (phonemeOfs < charPhonemes.length) {
			typePhoneme = typePhonemes[phonemeOfs];
			charPhoneme = charPhonemes[phonemeOfs];
			phonemeOfs++;
			if ((typePhoneme == '4') || (typePhoneme == '6'))
				break;
			charPart[partIndex++] = charPhoneme;
			typePart += typePhoneme;
		}
		// Если достигли конца - копируем буфер в текущую часть
		if ((phonemeOfs >= charPhonemes.length) && (typePhoneme != '4') && (typePhoneme != '6')) {
			for (let key in charPart) {
				charSyllables[syllableOfs] += charPart[key | 0];
			}
			typeSyllables[syllableOfs] += typePart;
		}
		else {
			// Если нашли следующую гласную, разбиваем согласно правилам
			// 1. сочетание шумных согласных между гласными отходит к последующему
			// слогу: про-стой
			// 13[4-(11)4]0 или 4-(12)4 или 4-(21)4 или 4-(22)4
			// 2. сочетание шумного согласного с сонорным между гласными отходит к
			// последующему слогу: до-бро
			// 2[4-(23)4] или 4-(13)4
			// 3. сочетание сонорного согласного с шумным между гласными имеет
			// слогораздел внутри это сочетания: пар-та
			// 1[4(3-1)4] или 4(3-2)4
			// 4. сочетание звука Й с шумным или сонорным между гласными имеет
			// слогораздел внутри этого сочетания, так как Й является более звучным,
			// чем сонорный: тай-на
			// 1[4(5-3)4] или 4(5-2)4 4(5-1)4
			// 5. сочетание сонорных согласных между гласными отходит к последующему
			// слогу: ко-рма
			// 1[4-(33)4]
			// 6. 4-(1)4 / 4-(2)4 / 4-(3)4
			// 7. 4(5)-4
			// 8. 4-4
			// 9. пре-дыс-то-ри-я = 134-(261-1)4-34-4
			// под-твер-жде-ни-е = 14(2-12)43-224-34-4
			if (typePart.length == 0) { // (8)
				syllableOfs++;
				charSyllables[syllableOfs] = charPhoneme;
				typeSyllables[syllableOfs] = typePhoneme;
			}
			else if (typePart.length == 1) {
				if ((typePart == '1') || (typePart == '2') || (typePart == '3')) { // (6)
					syllableOfs++;
					charSyllables[syllableOfs] = '';
					for (let key in charPart) {
						charSyllables[syllableOfs] += charPart[key | 0];
					}
					charSyllables[syllableOfs] += charPhoneme;
					typeSyllables[syllableOfs] = typePart + typePhoneme;
				}
				else { // (7)
					for (let key in charPart) {
						charSyllables[syllableOfs] += charPart[key | 0];
					}
					typeSyllables[syllableOfs] += typePart;
					syllableOfs++;
					charSyllables[syllableOfs] = charPhoneme;
					typeSyllables[syllableOfs] = typePhoneme;
				}
			}
			else if (typePart.length == 2) {
				if ((charPart[0] == charPart[1]) || (typePart == '31')
				    || (typePart == '32') || (typePart == '51') || (typePart == '52')
				    || (typePart == '53') || (prevTypePhoneme == '6')) { // (3,4,9)
					charSyllables[syllableOfs] += charPart[0];
					typeSyllables[syllableOfs] += typePart.charAt(0);
					syllableOfs++;
					charSyllables[syllableOfs] = charPart[1] + charPhoneme;
					typeSyllables[syllableOfs] = typePart.charAt(1) + typePhoneme;
				}
				else { // (1,2,5)
					syllableOfs++;
					charSyllables[syllableOfs] = '';
					for (let key in charPart) {
						charSyllables[syllableOfs] += charPart[key | 0];
					}
					charSyllables[syllableOfs] += charPhoneme;
					typeSyllables[syllableOfs] = typePart + typePhoneme;
				}
			}
			else { // в новый слог последние 2 согласных если они разные и
					// только 1 если одинаковые
				let key = 0;
				while (key < (typePart.length - 2)) {
					charSyllables[syllableOfs] += charPart[key];
					typeSyllables[syllableOfs] += typePart.charAt(key);
					key++;
				}
				if (charSyllables[key] == charSyllables[key + 1]) {
					charSyllables[syllableOfs] += charPart[key];
					typeSyllables[syllableOfs] += typePart.charAt(key);
					key++;
					syllableOfs++;
					charSyllables[syllableOfs] = charPart[key] + charPhoneme;
					typeSyllables[syllableOfs] = typePart.charAt(key) + typePhoneme;
				}
				else {
					syllableOfs++;
					charSyllables[syllableOfs] = charPart[key];
					typeSyllables[syllableOfs] = typePart.charAt(key);
					key++;
					charSyllables[syllableOfs] += charPart[key] + charPhoneme;
					typeSyllables[syllableOfs] += typePart.charAt(key) + typePhoneme;
				}
			}
		}
	}

	let res = '';
	let hyp = false;
	let last = charSyllables.length - 1;
	for (let key in charSyllables) {
		if (hyp) {
			if ((key != last) || (charSyllables[key | 0].length != 1))
				res += symbol;
		}
		hyp = false;
		res += charSyllables[key | 0];
		if ((key != 0) || (charSyllables[key | 0].length != 1))
			hyp = true;
	}
	return res;
}

/**
 * @param {string} content 
 * @param {string} symbol 
 * @returns {string}
 */
export function hyphen(content, symbol) {
	let newContent = '';
	let contentOfs = 0;
	let charWord = '';
	let typeWord = '';

	let upperCount = 0;
	let ch;

	// Extracting words from text, but skip words from rule 1.b.
	// Выделяем слова из текста для обработки с учётом 1.б.
	while (contentOfs < content.length) {
		ch = content.charAt(contentOfs);

		if (ch == '<') {
			charWord += ch;
			contentOfs++;
			while (contentOfs < content.length) {
				ch = content.charAt(contentOfs);
				charWord += ch;
				contentOfs++;
				if (ch == '>')
					break;
			}
			newContent += charWord;
			charWord = '';
			continue;
		}
		else if (ch == '&') {
			contentOfs++;
			while (contentOfs < content.length) {
				ch = content.charAt(contentOfs);
				if (ch == ';') {
					charWord += ch;
					contentOfs++;
					break;
				}
				else if (ASCII.indexOf(ch) == -1) {
					charWord = hyphen(charWord, symbol);
					break;
				}
				charWord += ch;
				contentOfs++;
			}
			if (charWord.toLowerCase() == 'shy;')
				newContent += '&#173;';
			else
				newContent += '&' + charWord;
			charWord = '';
			continue;
		}

		let idx = UPPERLOWER.indexOf(ch);
		if (idx != -1) {
			if (UPPER.indexOf(ch) != -1)
				upperCount++;
			charWord += ch;
			typeWord += TYPESTYPES.charAt(idx);
		}
		else {
			if (charWord.length > 0) {
				if (upperCount > 1) {
					newContent += charWord;
					upperCount = 0;
				}
				else {
					newContent += hyphenWord(charWord, typeWord, symbol);
				}
			}
			newContent += ch;
			charWord = '';
			typeWord = '';
			if (ch == ' ') {
				upperCount = 0;
			}
		}
		contentOfs++;
	}

	if (charWord.length > 0) {
		if (upperCount > 1)
			newContent += charWord;
		else
			newContent += hyphenWord(charWord, typeWord, symbol);
	}

	return newContent;
}

/**
 * @param {HTMLElement} element 
 */
export function hyphenHtml(element) {
	element.innerHTML = hyphen(element.innerHTML, '&#173;');
}

/**
 * @param {HTMLTextAreaElement} element
 */
export function hyphenTextArea(element) {
	let content = element.placeholder;
	if (content.length > 0) {
		element.placeholder = hyphen(content, '\xAD');
	}
}

/**
registerEventOnce('evLoad', function() {
	let p = document.getElementsByTagName('p');
	for (let key in p) {
		if (p.hasOwnProperty(key)) {
			hyphenHtml(p[key]);
		}
	}
	let p = document.getElementsByTagName('textarea');
	for (let key in p) {
		if (p.hasOwnProperty(key)) {
			hyphenTextArea(p[key]);
		}
	}
});
*/
