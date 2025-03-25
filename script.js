const obj = {
    name:'waqas',
    age:'18',
    sallery:function hy() {
        return (`hellow ${this.name}`)
    },
    favmovei:['baagi','hero panti','dilwaly 2']
}
document.writeln(obj.favmovei[2])
document.writeln(obj.sallery())