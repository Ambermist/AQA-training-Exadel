const printer = {
    type : 'laser',
    color : 'b&w',
    print(){console.log(`Printer is of type ${this.type} and color ${this.color}`)}
}
setTimeout(() => printer.print(), 500);
