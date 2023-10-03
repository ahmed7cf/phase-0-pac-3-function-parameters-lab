function introduction(name) {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language) {
    let newLanguage = language;
    if (language === undefined) {
        newLanguage = "JavaScript";
    }
    
    return `Hi, my name is ${name} and I am learning to program in ${newLanguage}.`
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}