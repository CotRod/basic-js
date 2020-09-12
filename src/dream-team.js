module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        return members.filter(name => typeof name === 'string')
                .map(name => name.trimLeft()[0].toUpperCase())
                .sort()
                .join('');
    }
    return false;
};
