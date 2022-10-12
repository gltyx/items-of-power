/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '属性',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Back": "返回",
    "Credits": "鸣谢",
    "Items of Power": "力量之源",
    "Load Game": "加载游戏",
    "New Game": "新游戏",
    "Options": "选项",
    "Resume": "返回",
    "All other images and sounds are collected from various sources and are licensed under the CC0 license.": "所有其他图像和声音均从各种来源收集，并根据CC0许可获得许可。",
    "Assassin": "刺客",
    "Barbarian": "野蛮人",
    "Cancel": "取消",
    "Cleric": "牧师",
    "Deal a total of 100000 damage to enemies": "总共对敌人造成100000损害",
    "Destroy": "摧毁",
    "Disable": "禁用",
    "Ehehehehe": "额呵呵呵呵",
    "Encounter 5 Hags": "遇到5个巫婆",
    "Environment images -": "环境图像 - ",
    "Fus Ro Dead": "FUS RO死了",
    "Gain a total of over 9000 power": "总共获得 9000 力量",
    "Gain stats from daggers 200 times": "获取 200 匕首的属性数据",
    "Get past tier 10": "越过第 10 层",
    "Have a helmet, armor, gloves, belt, and boots at the same time.": "同时拥有头盔，盔甲，手套，腰带和靴子。",
    "Heal a total of 20000 health": "总共治愈 20000 生命值",
    "His power level is over 9000!": "他的力量等级超过 9000！",
    "I Am Master of My Own Domain": "我是我自己的领域的主人",
    "I Speak for the Trees": "我为树说话",
    "I thought Big Boss was a Snake...": "我以为大Boss是一条蛇...",
    "Kill a total of 15 Zombies": "总共杀死 15 僵尸",
    "Kill the Cinder Dragon": "杀死 煤渣龙",
    "Kill the Defiled Spriggan": "杀死 被玷污的斯普里根",
    "Kill the Goblin Big Boss": "杀死 哥布林大Boss",
    "Kill The Inevitable": "杀死 不可避免",
    "Kill the Witch King": "杀死 巫王",
    "Music -": "音乐 -",
    "Music: ": "音乐：",
    "Paladin": "圣骑士",
    "Pile On!": "堆积！",
    "Ranger": "游侠",
    "Recruit 5 units": "招募5个单位",
    "Replace": "更换",
    "That's a lot of damage!": "那是很大的伤害！",
    "That's Not a Knife. THIS is a Knife!": "那不是刀。 这是一把刀！",
    "The Last Suit You'll Ever Wear": "你穿的最后一套衣服",
    "Time Heals All Wounds": "时间可以治愈所有伤口",
    "Which King?": "哪个国王？",
    "Delete": "删除",
    "Load": "加载",
    "DIED": "死掉了",
    "Assassinate": "刺杀",
    "Berserk": "狂暴",
    "Heal": "治疗",
    "Powerful Swing": "强力振荡",
    "Spread Shot": "扩散射击",
    "Attack the enemy with the highest HP for 60% POW.": "以 60％ 的 力量 攻击当前最高 生命值 的敌人。",
    "Attack the enemy with the lowest HP for 30% POW. Has a 50% chance to do 3x damage.": "攻击 生命值 最低的敌人，造成 30% 的 力量伤害。有 50% 的几率造成 3倍 伤害。",
    "Attack up to 3 random enemies for 15% POW.": "攻击最多3个随机敌人，造成 15% 的 力量伤害。",
    "Heal the ally with the lowest percentage HP for 30% POW.": "治疗生命值最低的队友 30% 力量伤害 的血量。",
    "If above 50% HP, attack a random enemy for 80% POW and damage self for 10% HP. If below 50% HP, heal self for 20% HP.": "如果生命值高于 50％，攻击一个随机的敌人，造成 80％的力量伤害，并以对自己造成 10% 生命值的伤害。 如果生命值低于 50％，则可以治愈自己 20％ 生命值。",
    "Goblin": "哥布林",
    "Goblin Veteran": "哥布林老兵",
    "Each unit has a unique ability (attack) which can be as simple as the Paladin's \"Attack the enemy with the highest health for 60% of your power stat\" or as complex as the Barbarian's where they only attack if above 50% health otherwise heal themself. Be sure to hover over each of your units so you know each of their unique abilities.": "每个单位都有独特的能力（攻击），可以像圣骑士的“攻击敌人”的60％的力量属性\攻击敌人，或者与野蛮人一样复杂，只有在50％以上的生命值状况下才能攻击它们 否则就可以自己治愈。 确保悬停在每个单位上，以便您知道它们的每个独特能力。",
    "Got it": "知道了",
    "Next": "下一个",
    "Skip All": "跳过所有",
    "Tutorial": "教程",
    "Attack up to 2 random enemies for 25% POW.": "攻击最多2个随机敌人，造成 25% 的力量伤害。",
    "Attack a random enemy for 60% POW.": "攻击一个随机敌人并造成 60% 力量伤害。",
    "Attack a random enemy for 30% POW. Heal self for the same amount.": "攻击一个随机敌人并造成 30% 力量伤害。治疗自己同样数量的生命值。",
    "Achievement Unlocked!": "成就解锁！",
    "All of your units have fallen.": "你所有的单位都倒下了。",
    "Barrel Bombs": "桶爆弹",
    "Basic Attack": "基础攻击",
    "Congratulations on killing the first boss! There are 5 unique bosses in this version of the game and the first time killing each will reward you new unlockables having a chance to show up.": "恭喜您杀死了第一位老板！ 这个版本的游戏中有5个独特的老板，第一次杀死每个人都会奖励您有机会出现的新解锁。",
    "Decline": "拒绝",
    "Drink Blood": "吸血",
    "For killing the Goblin Big Boss you now have a chance to get the Potion. Anything you unlock will also be available in any new runs you start. You can disable any unlocks in the Achievements menu.": "为了杀死妖精的大老板，您现在有机会获得药水。 您解锁的任何内容也将在您开始的任何新运行中可用。 您可以在“成就”菜单中禁用任何解锁。",
    "Goblin Big Boss": "哥布林大Boss",
    "Goblin Boomer": "哥布林喷射者",
    "Hahahaha, no.": "哈哈哈哈，不。",
    "I wanna join you guys": "我想加入你们",
    "Killed Goblin Big Boss": "杀死了哥布林大Boss",
    "Revive a fallen ally goblin with full HP or attack a random enemy for 60% POW.": "复活一个倒下的队友地精，并获得全血或随机攻击一个敌人，造成 60% 的力量伤害。",
    "Revive Goblin": "复活的妖精",
    "Tip: Increasing your unit's speed will allow them to use their unique abilities more often.": "提示：提高单位的速度将使他们更频繁地使用自己的独特能力。",
    "Try Again": "再试一次",
    "Vampire": "吸血鬼",
    "You Lost!": "你输了！",
    "I join?": "我可以加入吗?",
    "Potion": "药水",
    "Also, FYI, the game is automatically saving between each encounter. You can close this page right now if you want and you'll be able to load right back into this run. You can also have save files for multiple runs, so feel free to start new games and experiement with different builds all you want.": "另外，游戏会在每次遭遇战之间自动保存。如果您愿意，您可以立即关闭此页面，您将能够立即加载到这次运行中。你也可以保存文件进行多次运行，所以你可以自由地开始新游戏，尝试不同的构建。",
    "Attack all enemies for 15% POW. Heal all allies for 50% POW": "攻击所有敌人并造成 15％的力量伤害。 治愈所有队友 50％ 力量伤害的生命值",
    "Attack the enemy with the lowest health for 50% POW. Automatically revives 5 seconds after dying with 1 HP.": "攻击最低生命值的敌人并造成 50% 的力量伤害。 在死亡 5秒 后自动复活并有 1 生命值。",
    "Banshee": "报丧女妖",
    "Cards (Tier 1): +1 to a random stat every 1 second": "卡牌（品阶 1）：每秒随机 +1 属性",
    "Deep Elf Assassin": "深精灵刺客",
    "Deep Elf Ranger": "深精灵游侠",
    "Good riddance": "甩掉包袱",
    "I'll Be Back": "我会回来的",
    "Killed Witch King": "杀死了 巫王",
    "Mortal Coil": "致命缠绕",
    "Nice job! That AOE attack was pretty strong. By the way, here's a tip; you can adjust the rotation of your items by gently pushing them against your other items.": "不错的工作！ AOE攻击非常强烈。 顺便说一句，这是一个小费； 您可以通过将项目轻轻推向其他物品来调整项目的旋转。",
    "Please let me join. I'll die out there alone!": "请让我加入。 我会一个人死在那里的！",
    "Witch King": "巫王",
    "Wraith": "幽灵",
    "Zombie": "僵尸",
    "Attack up to 3 random enemies for 15% POW": "最多随机攻击 3个 敌人并造成 15% 力量伤害",
    "Deep Elf Wizard": "深精灵巫师",
    "Rogue: Attack a random enemy for 30% POW. Steal 10% of their POW for the rest of this battle.": "偷取: 攻击一个随机的敌人并造成 30% 力量伤害。在剩下的战斗休息时偷取他们 10% 的力量伤害。",
    "If you don't let me join, you're gonna regret it.": "If you don't let me join, you're gonna regret it.",
    "+5 to a random stat every 1 second": "每秒 +5 到随机属性",
    "Also, you unlocked the Warlord. They have a similar ability to the boss you just killed. The Warlord now has a chance of appearing as a random recruit or they have a chance to replace the Barbarian when you start a new game.": "另外，您解锁了军阀。他们的能力与您刚刚杀死的老板具有相似的能力。现在，军阀有机会成为随机的新兵，或者当您开始新游戏时，他们有机会取代野蛮人。",
    "Amulet": "护身符",
    "Amulet: Revives fallen unit with 1 HP every 10 seconds": "护身符：每隔 10秒 复活倒下的单位并恢复 1 生命值",
    "Artificer: Attack the enemy with the highest HP for 35% POW. All POW stat gains are doubled. When this unit falls, it loses 5% POW.": "工匠：攻击最高生命值的敌人并造成 35% 的力量伤害。所有力量属性收益都翻了一番。当该单位倒下时，它会失去 5% 的力量。",
    "Attack a random enemy for 30% POW. All allies gain 5% POW for the rest of this battle.": "攻击一个随机敌人并造成 30% 力量伤害。所有队友在本次战斗的其余时间获得了 5％ 的力量。",
    "Attack a random enemy for 60% POW. All allies gain 10% POW, SPD, and HP for the rest of this battle.": "攻击一个随机敌人并造成 60% 力量伤害。所有队友在本次战斗的休息时间获得了 5％ 的力量，速度，和生命值",
    "Attack all enemies for 20% POW": "以20％的战俘攻击所有敌人",
    "Attack the enemy with the highest health for 10% POW and stun them for 1 second.": "以10％的POW攻击敌人，并击中他们1秒钟。",
    "Attack the enemy with the lowest health for 40% POW. Gain +10% HP for the rest of this battle.": "以40％的POW攻击最低健康的敌人。在本次战斗的其余部分中，增长 +10％HP。",
    "1): +1 POW, +1 SPD every 1 second. Resets unit's ability charge": "1）：+1 力量，+1 速度 每秒。重置单位的能力充能",
    "Can I please join your party?": "我可以参加你的聚会吗？",
    "Cinder Dragon": "煤渣龙",
    "Defiled Spriggan": "被玷污的斯普里根",
    "Dragonkin Evoker": "巨龙唤魔者",
    "Dragonkin Knight": "龙金骑士",
    "ehehehehe": "额呵呵呵呵",
    "For killing The Inevitable you unlocked the Books. They have higher stat bonuses than other items, but they reset your unit's ability bar every time they activate which makes them unable to attack in battle.": "为了杀死不可避免的书，您解锁了书籍。它们具有比其他项目更高的属性奖金，但是每次激活时都会重置您的单位能力栏，这使他们无法在战斗中攻击。",
    "From Dust to Dust": "从灰尘到灰尘",
    "Gain +10% POW for the rest of this battle. Attack the enemy with the highest HP for 40% POW.": "在本次战斗的其余部分中获得 +10％的战俘。以40％的POW攻击最高HP的敌人。",
    "Growth": "生长",
    "Hag": "魔女",
    "Heal a random damaged ally for 30% POW and attack a random enemy for 30% POW.": "以30％的战俘治愈随机损坏的队友，并以30％的战俘攻击随机敌人。",
    "Heal and Harm": "治愈和伤害",
    "Hellion": "恶狼",
    "Hey, you're getting pretty far in. Be sure to take a look at the achievement list by pressing the button in the top right to see if there's anything you could be working towards.": "嘿，您走得很远。请务必按下右上角的按钮来查看成就列表，以查看您是否可以努力努力。",
    "I Curse You!": "我诅咒你！",
    "I curse you! You must choose one of your Items of Power to destroy": "我诅咒你！您必须选择自己的力量之一来销毁",
    "I'm A Dragon, Bitch": "我是一条龙，老铁",
    "Immovable Object": "无法撼动",
    "Killed Cinder Dragon": "杀死了煤渣龙",
    "Killed Defiled Spriggan": "杀死了 被玷污的斯普里根",
    "Killed The Inevitable": "杀死了 不可避免的",
    "May I join your party?": "我可以加入你的队伍吗？",
    "Planar Adept": "平面熟练",
    "Rally Around Me!": "在我周围集会！",
    "Revives fallen unit with 1 HP every 10 seconds": "每 10秒 恢复倒下的单位并恢复 1 生命值",
    "Sanctum Guardian": "圣所监护人",
    "Star Elemental": "星级元素",
    "Stronger Together": "在一起更强壮",
    "That was a fun boss, right? In case you killed the Defiled Spriggan too fast to realize it, it was increasing the stats of all it's allies each time it attacked.": "那是一个有趣的Boss，对吗？如果您杀死了 被玷污的斯普里根 太快了，以至于无法意识到，那么每次攻击时，它都会增加所有队友的属性。",
    "The Amulet will revive fallen units. It's completely useless while travelling, but during battle, it can really help keep those key units alive.": "护身符将复活堕落的单位。它在旅行时完全没有用，但是在战斗中，它确实可以帮助保持这些关键单位的存活。",
    "The Inevitable": "不可避免",
    "Tip: You can pause the game by pressing the button at the bottom of the screen. This is useful for adjusting your items between battles.": "提示：您可以通过按屏幕底部的按钮来暂停游戏。这对于在战斗之间调整装备很有用。",
    "Treefolk": "树妖",
    "Warlord": "战争领主",
    "Warlord: Attack a random enemy for 30% POW. All allies gain 5% POW for the rest of this battle.": "战争领主：攻击一个随机敌人并造成 30% 的力量伤害。所有队友在本次战斗的其余部分获得了 5％的力量伤害。",
    "You must choose one of your items of power to destroy.": "你必须选择一件你的装备来摧毁。",
    "1): +1 to a random stat every 1 second": "1)：每 1 秒 +1 随机属性",
    "Enable": "启用",
    "Groovy": "有趣",
    "Boomer OK?": "喷射好吗？",
    "No way.": "没门。",
    "Hammer: +25% POW every 5 seconds then -25% POW over the next 2.5 seconds.": "锤子：每 5 秒 +25% 力量，然后在接下来的 2.5 秒内 -25% 力量。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Nice job killing each of the bosses for the first time! Now you can keep going for as long as you can stay alive while continuing to work on those achievements to get more unlockable items and units. Have you unlocked the Artificer yet? That's a pretty fun unit. They get double POW stats.": "不错的工作，第一次杀死每个Boss！ 现在，只要您能够保持活力，同时继续致力于取得更多可解锁的物品和单位，就可以继续前进。 你解锁了工匠吗？ 那是一个非常有趣的单位。 他们获得了双重属性。",
    "If you're enjoying the game, I hope to hear from you in either the itch.io comments or on the Discord (which you can find in the top right corner of the main menu). There's nothing I love more than hearing from people that have played my games. Every comment literally makes my day. Even saying something as simple as \"hey, I enjoyed your game\" means the world to me. Good luck getting as far as you can and completing the rest of the achievements!": "如果您喜欢游戏，我希望在iTch.io评论或Discord上收到您的来信（您可以在主菜单的右上角找到）。 除了听到我的游戏的人的声音，我没有什么比这更喜欢的了。 每个评论从字面上使我的一天。 甚至说一些简单的话“嘿，我喜欢你的游戏\”对我来说意味着世界。 祝您好运，并完成其余的成就！",
    "Your goal is to survive for as long as possible while defeating bosses and unlocking new items and units by completing achievements. You can check your progress of your achievements on the main menu. Good luck!": "你的目标是在打败boss并通过完成成就解锁新装备和单位的同时尽可能长时间地生存下去。你可以在主菜单上查看你的成就进度。祝你好运！",
    "You just chose your first Item of Power. You can drag it around in your party area by using your mouse.": "你刚选了你的第一件装备。你可以在你的队伍区域用鼠标拖动它。",
    "When your Items of Power activate, they will apply their effects to whichever unit(s) they are overlapping. Try to position your items so they overlap as many units as possible.": "当你的装备激活时，它们会对与之重叠的单位产生效果。试着将你的装备放置在尽可能多的单位上。",
    "When in combat, your units will automatically use their abilities (attacks) when their blue ability bar is full. This bar charges faster depending on your unit's speed (SPD).": "在战斗中，当您的蓝色能力栏已满时，您的单位将自动使用其能力（攻击）。 该条的收费速度更快，具体取决于单位的速度（SPD）。",
    "Leonard Pabin": "Leonard Pabin",
    "SfxValley": "Sfxvalley",
    "PONETI": "PONETI",
    "Item images -": "装备图像 - ",
    "Justin Nichol": "Justin Nichol",
    "Kenney": "Kenney",
    "Game by": "作者",
    "UI images -": "UI图片 -",
    "Unit images -": "单位图片 -",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Dagger (Tier ": "匕首 (品阶 ",
    "Bow (Tier ": "弓 (品阶 ",
    "Belt (Tier ": "腰带 (品阶 ",
    "Gloves (Tier ": "手套 (品阶 ",
    "Cards (Tier ": "卡牌 (品阶 ",
    "Axe (Tier ": "斧子 (品阶 ",
    "Book (Tier ": "书 (品阶 ",
    "Armor (Tier ": "护甲 (品阶 ",
    "Magic Ring (Tier ": "魔法戒指 (品阶 ",
    "Boots (Tier ": "靴子 (品阶 ",
    "Sword (Tier ": "剑 (品阶 ",
    "Helmet (Tier ": "头盔 (品阶 ",
    "Total: ": "总计: ",
    "Encounter: ": "遭遇: ",
    "Play time:": "游戏时长:",
    "Save Started On:": "保存开始于:",
    "Tier: ": "层级: ",
    "Ability: ": "能力: ",
    "Potion: ": "药水: ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^总计(.+)$/,
    /^能力(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) in ([\d\.,]+) Chance$/, '$1 \/ $2 几率'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Heal (.+) health every (.+) seconds$/, '治愈 $1 生命值 每隔 $2 秒'],
    [/^\+([\d\.,]+) HP every ([\d\.,]+) seconds$/, '\+$1 生命值 每隔 $2 秒'],
    [/^\+([\d\.,]+) SPD every ([\d\.,]+) seconds$/, '\+$1 速度 每隔 $2 秒'],
    [/^\+([\d\.,]+) POW every ([\d\.,]+) seconds$/, '\+$1 力量 每隔 $2 秒'],
    [/^\-([\d\.,]+) SPD, \+([\d\.,]+) HP every ([\d\.,]+) seconds$/, '\-$1 速度，\+$2 生命值 每隔 $3 秒'],
    [/^\+([\d\.,]+) SPD, \+([\d\.,]+) HP every ([\d\.,]+) seconds$/, '\+$1 速度，\+$2 生命值 每隔 $3 秒'],
    [/^\+([\d\.,]+) POW, \+([\d\.,]+) HP every ([\d\.,]+) seconds$/, '\+$1 力量，\+$2 生命值 每隔 $3 秒'],
    [/^\+([\d\.,]+) POW, \+([\d\.,]+) SPD every ([\d\.,]+) seconds$/, '\+$1 力量，\+$2 速度 每隔 $3 秒'],
    [/^\+([\d\.,]+) POW, \+([\d\.,]+) SPD, \+([\d\.,]+) HP every ([\d\.,]+) seconds$/, '\+$1 力量，\+$2 速度，\+$3 生命值 每隔 $4 秒'],
    [/^\+([\d\.,]+) POW, \-([\d\.,]+) SPD every ([\d\.,]+) seconds$/, '\+$1 力量，\-$2 速度 每隔 $3 秒'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);