var translations = {
    en: {
        title: "Secret Santa Generator",
        subtitle: "No signup, no email, no bullshit. Just a straightforward {link}open-source{/link} tool to help you generate your secret santa pairings. One static page, and that's it.",
        instructions: "In the most common case (no exclusion rules, pair each guest with another at random), enter the name of your guests one line at a time. Once done, press \"generate\" and you're all set: send the generated links to your guests (by mail, chat, whatever floats your boat) and their pairing will be revealed to them (and only them) once they open the link.",
        originTitle: "Where does this tool come from?",
        originText: "I wanted to make a Secret Santa over Facebook without having to reveal to anyone my guests email addresses (so nothing that would require a backend). I also wanted not to know who was paired with me, so I had to find a way to somehow obfuscate the information. And being a developer, well, my first thought was \"Let's AES it, for fun and profits!\". Classic.",
        generateButton: "Generate your pairings",
        placeholder: "# You can add a user by adding a line\nSanta\n\n# You can add some details if you want to, using parentheses after the name\nNicholas (the elf)\n\n# You can prevent someone from being paired with someone else\nMaël !Aurélie\nAurélie !Maël\n\n# You can also exclude someone from being paired with multiple people\n# Careful: too many exclusion rules can make your secret santa less interesting!\nRudolph !Santa !Nicholas (the elf)\n\n# You can also cheat a bit and force someone to be paired with another\nNicholas (the saint) =Nicholas (the elf)\n\n...",
        syntaxError: "Syntax error: \"{line}\" isn't valid",
        protectConfirm: "If you click this link, you will be revealed {name}'s pairing! Are you sure you want to do this? Only do this if you're actually {name}.\n\nUse right-click to copy the link target instead.",
        pairingTitle: "Hi {name}! You've been paired with",
        pairingGoodLuck: "Good luck!",
        pairingFooter: "Want to start your own Secret Santa with your friends? Click here to get started!",
        errors: {
            cannotRedefine: "Cannot redefine {name}",
            notDeclared: "{name} is paired with {enforced}, which hasn't been declared as a possible pairing",
            multiplePairings: "Per your rules, multiple persons are paired with {enforced}",
            noMatch: "We haven't been able to find a match for {name}! Press \"Generate\" to try again and, if it still doesn't work, try removing some exclusions from your rules. Sorry for the inconvenience!"
        }
    },
    fr: {
        title: "Générateur de Secret Santa",
        subtitle: "Pas d'inscription, pas d'email, pas de conneries. Juste un outil {link}open-source{/link} simple pour vous aider à générer vos appariements de secret santa. Une page statique, c'est tout.",
        instructions: "Dans le cas le plus courant (pas de règles d'exclusion, apparier chaque invité avec un autre au hasard), entrez le nom de vos invités un par ligne. Une fois terminé, appuyez sur \"générer\" et c'est prêt : envoyez les liens générés à vos invités (par mail, chat, peu importe) et leur appariement leur sera révélé (et seulement à eux) une fois qu'ils ouvriront le lien.",
        originTitle: "D'où vient cet outil ?",
        originText: "Je voulais faire un Secret Santa sur Facebook sans avoir à révéler à quiconque les adresses email de mes invités (donc rien qui nécessiterait un backend). Je voulais aussi ne pas savoir qui était apparié avec moi, donc j'ai dû trouver un moyen d'obfusquer l'information d'une manière ou d'une autre. Et étant développeur, eh bien, ma première pensée était \"Cryptons-le en AES, pour le fun et le profit !\". Classique.",
        generateButton: "Générer vos appariements",
        placeholder: "# Vous pouvez ajouter un utilisateur en ajoutant une ligne\nPère Noël\n\n# Vous pouvez ajouter des détails si vous le souhaitez, en utilisant des parenthèses après le nom\nNicolas (l'elfe)\n\n# Vous pouvez empêcher quelqu'un d'être apparié avec quelqu'un d'autre\nMaël !Aurélie\nAurélie !Maël\n\n# Vous pouvez également exclure quelqu'un d'être apparié avec plusieurs personnes\n# Attention : trop de règles d'exclusion peuvent rendre votre secret santa moins intéressant !\nRudolph !Père Noël !Nicolas (l'elfe)\n\n# Vous pouvez aussi tricher un peu et forcer quelqu'un à être apparié avec un autre\nNicolas (le saint) =Nicolas (l'elfe)\n\n...",
        syntaxError: "Erreur de syntaxe : \"{line}\" n'est pas valide",
        protectConfirm: "Si vous cliquez sur ce lien, l'appariement de {name} vous sera révélé ! Êtes-vous sûr de vouloir faire cela ? Ne faites cela que si vous êtes réellement {name}.\n\nUtilisez le clic droit pour copier la cible du lien à la place.",
        pairingTitle: "Salut {name} ! Tu as été apparié avec",
        pairingGoodLuck: "Bonne chance !",
        pairingFooter: "Vous voulez créer votre propre Secret Santa avec vos amis ? Cliquez ici pour commencer !",
        errors: {
            cannotRedefine: "Impossible de redéfinir {name}",
            notDeclared: "{name} est apparié avec {enforced}, qui n'a pas été déclaré comme un appariement possible",
            multiplePairings: "Selon vos règles, plusieurs personnes sont appariées avec {enforced}",
            noMatch: "Nous n'avons pas pu trouver d'appariement pour {name} ! Appuyez sur \"Générer\" pour réessayer et, si cela ne fonctionne toujours pas, essayez de supprimer certaines exclusions de vos règles. Désolé pour le désagrément !"
        }
    },
    de: {
        title: "Wichtel-Generator",
        subtitle: "Keine Anmeldung, keine E-Mail, kein Blödsinn. Einfach ein {link}Open-Source{/link}-Tool, das Ihnen hilft, Ihre Wichtelpaarungen zu generieren. Eine statische Seite, das war's.",
        instructions: "Im häufigsten Fall (keine Ausschlussregeln, jeder Gast wird zufällig mit einem anderen gepaart) geben Sie die Namen Ihrer Gäste zeilenweise ein. Wenn Sie fertig sind, drücken Sie \"Generieren\" und schon sind Sie fertig: Senden Sie die generierten Links an Ihre Gäste (per E-Mail, Chat, was auch immer) und ihre Paarung wird ihnen (und nur ihnen) offenbart, sobald sie den Link öffnen.",
        originTitle: "Woher kommt dieses Tool?",
        originText: "Ich wollte ein Wichteln über Facebook machen, ohne jemandem die E-Mail-Adressen meiner Gäste preiszugeben (also nichts, was ein Backend erfordern würde). Ich wollte auch nicht wissen, wer mit mir gepaart wurde, also musste ich einen Weg finden, die Informationen irgendwie zu verschleiern. Und als Entwickler war mein erster Gedanke: \"Lass es uns mit AES verschlüsseln, zum Spaß und Profit!\". Klassisch.",
        generateButton: "Ihre Paarungen generieren",
        placeholder: "# Sie können einen Benutzer hinzufügen, indem Sie eine Zeile hinzufügen\nWeihnachtsmann\n\n# Sie können einige Details hinzufügen, wenn Sie möchten, indem Sie Klammern nach dem Namen verwenden\nNikolaus (der Elf)\n\n# Sie können verhindern, dass jemand mit jemand anderem gepaart wird\nMaël !Aurélie\nAurélie !Maël\n\n# Sie können auch jemanden davon ausschließen, mit mehreren Personen gepaart zu werden\n# Vorsicht: Zu viele Ausschlussregeln können Ihr Wichteln weniger interessant machen!\nRudolph !Weihnachtsmann !Nikolaus (der Elf)\n\n# Sie können auch ein bisschen schummeln und jemanden zwingen, mit einem anderen gepaart zu werden\nNikolaus (der Heilige) =Nikolaus (der Elf)\n\n...",
        syntaxError: "Syntaxfehler: \"{line}\" ist nicht gültig",
        protectConfirm: "Wenn Sie auf diesen Link klicken, wird Ihnen die Paarung von {name} offenbart! Sind Sie sicher, dass Sie dies tun möchten? Tun Sie dies nur, wenn Sie tatsächlich {name} sind.\n\nVerwenden Sie stattdessen Rechtsklick, um das Linkziel zu kopieren.",
        pairingTitle: "Hallo {name}! Du wurdest gepaart mit",
        pairingGoodLuck: "Viel Glück!",
        pairingFooter: "Möchten Sie Ihr eigenes Wichteln mit Ihren Freunden starten? Klicken Sie hier, um zu beginnen!",
        errors: {
            cannotRedefine: "{name} kann nicht neu definiert werden",
            notDeclared: "{name} ist mit {enforced} gepaart, was nicht als mögliche Paarung deklariert wurde",
            multiplePairings: "Gemäß Ihren Regeln sind mehrere Personen mit {enforced} gepaart",
            noMatch: "Wir konnten keine Paarung für {name} finden! Drücken Sie \"Generieren\", um es erneut zu versuchen, und wenn es immer noch nicht funktioniert, versuchen Sie, einige Ausschlüsse aus Ihren Regeln zu entfernen. Entschuldigung für die Unannehmlichkeiten!"
        }
    }
};

// Helper function to translate text with placeholders
function translate(key, lang, params) {
    var keys = key.split('.');
    var text = translations[lang];
    for (var i = 0; i < keys.length; i++) {
        if (text && text[keys[i]]) {
            text = text[keys[i]];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    if (typeof text !== 'string') {
        return key;
    }
    
    // Replace placeholders
    if (params) {
        for (var param in params) {
            text = text.replace(new RegExp('\\{' + param + '\\}', 'g'), params[param]);
        }
    }
    
    // Replace link placeholders with actual links
    text = text.replace(/\{link\}(.*?)\{\/link\}/g, function(match, linkText) {
        return '<a href="https://github.com/arcanis/secretsanta">' + linkText + '</a>';
    });
    
    return text;
}

// Get current language from localStorage or browser, default to English
function getCurrentLanguage() {
    if (typeof window !== 'undefined' && window.localStorage) {
        var saved = window.localStorage.getItem('language');
        if (saved && (saved === 'en' || saved === 'fr' || saved === 'de')) {
            return saved;
        }
    }
    
    // Try to detect from browser
    if (typeof navigator !== 'undefined' && navigator.language) {
        var lang = navigator.language.substring(0, 2);
        if (lang === 'fr' || lang === 'de') {
            return lang;
        }
    }
    
    return 'en';
}

// Set current language
function setCurrentLanguage(lang) {
    if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('language', lang);
    }
}

