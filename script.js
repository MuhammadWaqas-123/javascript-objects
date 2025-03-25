const obj = {
    name:'waqas',
    age:'18',
    sallery:function hy() {
        return (`hellow ${this.name}`)
    },
    favmovei:['spider man','super man','acua man']
}
document.writeln(obj.favmovei[2])
document.writeln(obj.sallery())