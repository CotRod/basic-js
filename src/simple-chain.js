const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`(${value === undefined ? ' ' : ' ' + value + ' '})`);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(+position)) {
            this.flushChain();
            throw new Error(`Position ${position} is wrong`);
        }
        this.chain.splice(position - 1, 1)
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.join('~~');
        this.flushChain();
        return result;
    },
    flushChain(){
        this.chain.splice(0);
    }

};

module.exports = chainMaker;
