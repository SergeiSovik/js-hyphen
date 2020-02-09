# Smart Hyphen PWA Library

Hyphenation library based on the syllable section in the literary language due to the principle of upward sonority.

Currently supports English and Russian languages.

This is library for a fork project of [PWA](https://github.com/SergioRando/PWA)

# Examples
```
Sing-ha-san Battisi was the fantastic brilli-ant po-si-ti-on of author-i-ty of King Vikra-ma-di-tya, the King of Kings who led in the se-cond century, BC. The roy-al po-si-ti-on was skilled to him by Lord Ind-ra, the God of di-vi-ne be-ings. It was de-cor-a-ted by thir-ty-two dolls, thus the na-me.

The nar-ra-tive of Sing-ha-san Battisi is, in any case, about King Bho-ja's edi-fi-ca-ti-on into the li-fe and per-so-na of King Vikra-ma-di-tya. Lord Bho-ja gets an under-standing into the inc-re-dible ru-ler's li-fe thro-ugh stor-i-es desc-ri-bed by the thir-ty-two puppets, who spring up one by one each ti-me King Bho-ja endea-vors to mo-unt the ho-nor-ed po-si-ti-on.

Thro-ugh these acco-unts, we addi-ti-o-nally get an enligh-tenment into the li-fe of King Vikra-ma-di-tya. We be-co-me more acqua-inted with about his anxi-e-ty for his subjects, his li-ber-a-li-ty, be-ne-vo-lence and grit. The nar-ra-ti-ves are for us to acknow-ledge and co-py.
```

```
Ли-са и рак сто-ят вме-сте и го-во-рят про-меж се-бя. Ли-са го-во-рит ра-ку:
— Да-вай с то-бой пе-ре-го-ня-ться.
Рак:
— Что ж, ли-са, ну да-вай!
На-ча-ли пе-ре-го-ня-ться. Лишь ли-са по-бе-жа-ла, рак уце-пил-ся ли-се за хвост. Ли-са до ме-ста до-бе-жа-ла, а рак не отце-пля-е-тся. Ли-са обе-рну-лась по-смо-треть, ве-рну-ла хво-стом, рак отце-пил-ся и го-во-рит:
— А я да-вно уж жду те-бя тут.
```

# Install
Read full installation process before executing any command

Install only if u need to test this template before tamplating yours own project

## 1. GitHub account
Register one GitHub account, if u dont have it already

## 2. Visual Studio Code
Download and install **Visual Studio Code** from official link https://code.visualstudio.com/

## 3. Install Command Line Tools
Super user password required
```
sudo apt-get install git make minify default-jre nodejs
```
* Git - required to execute git commands
* Make - required to execute Makefiles
* Minify - required for HTML/CSS minification
* Java Runtime Environment (JRE) - required to launch Google Closure Compiler
* NodeJS - required for testing libraries

## 4. PWA Project
- Create new [PWA project](https://github.com/SergioRando/PWA)
- Or open existing project (project must be a fork from [PWA template](https://github.com/SergioRando/PWA)

## 5. Submodule
String Replacements
* _{Project Path}_ - path to drive with symlinks support (**NOT FAT32/NTFS/exFAT**)

```
cd {Project Path}/src/lib
git submodule add https://github.com/SergioRando/js-hyphen.git
```
_Note: don't forget to add notice about library license to yours project_

# Uninstall
String Replacements
* _{Project Path}_ - path to drive with symlinks support (**NOT FAT32/NTFS/exFAT**)
```
cd {Project Path}/src/lib
git submodule deinit js-hyphen
git rm js-hyphen
git commit -m "Removed submodule js-hyphen"
cd {Project Path}
rm -rf ./git/modules/src/lib/js-hyphen
```
_Note: be careful executing **rm** commands! It delete files permanenlty!_
