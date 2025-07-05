window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const author = 'ytyaru';
    van.add(document.querySelector('main'), 
        van.tags.h1(van.tags.a({href:`https://github.com/${author}/JS.TarGz.20250705174906/`}, 'TarGz')),
        van.tags.p('tgz(tar.gz)の圧縮・展開する。'),
//        van.tags.p('Compress and expand tgz (tar.gz).'),
    );
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make());

    const a = new Assertion();
//    a.t(true);
//    a.f(false);
//    a.e(TypeError, `msg`, ()=>{throw new TypeError(`msg`)});
    a.t(Type.isObj(Tgz));
    a.t(Type.isCls(Tgz.Reader));
    a.t(Type.isCls(Tgz.Writer));
    /*
    function mkWriter() {
        const writer = new Tgz.Writer();
        writer.addBlob('a.txt', new File(['aaaaaaa'], 'a.txt'));
        writer.addBlob('dir/b.txt', new File(['bbbbbbb'], 'dir/b.txt'));
        writer.addBlob('dir/c.txt', new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}));
        writer.addBlob('d.txt', new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}));
        return writer;
    }
    // Tgz.addBlob()
    a.t(()=>{
        const writer = new Tgz.Writer();
        writer.addBlob('a.txt', new File(['aaaaaaa'], 'a.txt'));
        writer.addBlob('dir/b.txt', new File(['bbbbbbb'], 'dir/b.txt'));
        writer.addBlob('dir/c.txt', new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}));
        writer.addBlob('d.txt', new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}));
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof File
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof File
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof File
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Blob;
    });
    // Tgz.addTextFile()
    a.t(()=>{
        const writer = new Tgz.Writer();
        writer.addTextFile('a.txt', 'aaaaaaa');
        writer.addTextFile('dir/b.txt', 'bbbbbbb');
        writer.addTextFile('dir/c.txt', 'ccccccc', {lastModified:Date.now()});
        writer.addTextFile('d.txt', 'ddddddd');
        console.log(writer.fileData)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array;
    });
    // Tgz.addFileBuffer()
    a.t(async()=>{
        const writer = new Tgz.Writer();
        writer.addFileBuffer('a.txt', await new File(['aaaaaaa'], 'a.txt').arrayBuffer());
        console.log('*****************')
        writer.addFileBuffer('dir/b.txt', await new File(['bbbbbbb'], 'dir/b.txt').arrayBuffer());
        writer.addFileBuffer('dir/c.txt', await new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}).arrayBuffer());
        writer.addFileBuffer('d.txt', await new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}).arrayBuffer());
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array;
    });
    // Tgz.addFolder()
    a.t(()=>{
        const writer = mkWriter();
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name
            && 'dir/b.txt'===writer.fileData[1].name
            && 'dir/c.txt'===writer.fileData[2].name
            && 'd.txt'    ===writer.fileData[3].name;
    });
    */
    // Tgz.add() File/Blob
    a.t(()=>{
        const writer = new Tgz.Writer();
        writer.add('a.txt', new File(['aaaaaaa'], 'a.txt'));
        writer.add('dir/b.txt', new File(['bbbbbbb'], 'dir/b.txt'));
        writer.add('dir/c.txt', new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}));
        writer.add('d.txt', new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}));
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof File
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof File
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof File
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Blob;
    });
    // Tgz.add() String
    a.t(()=>{
        const writer = new Tgz.Writer();
        writer.add('a.txt', 'aaaaaaa');
        writer.add('dir/b.txt', 'bbbbbbb');
        writer.add('dir/c.txt', 'ccccccc', {lastModified:Date.now()});
        writer.add('d.txt', 'ddddddd');
        console.log(writer.fileData)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array;
    });
    // Tgz.add() ArrayBuffer
    a.t(async()=>{
        const writer = new Tgz.Writer();
        writer.add('a.txt', await new File(['aaaaaaa'], 'a.txt').arrayBuffer());
        writer.add('dir/b.txt', await new File(['bbbbbbb'], 'dir/b.txt').arrayBuffer());
        writer.add('dir/c.txt', await new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}).arrayBuffer());
        writer.add('d.txt', await new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}).arrayBuffer());
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array;
    });
    // Tgz.add() Uint8Array
    a.t(async()=>{
        const writer = new Tgz.Writer();
        writer.add('a.txt', new Uint8Array(await new File(['aaaaaaa'], 'a.txt').arrayBuffer()));
        writer.add('dir/b.txt', new Uint8Array(await new File(['bbbbbbb'], 'dir/b.txt').arrayBuffer()));
        writer.add('dir/c.txt', new Uint8Array(await new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}).arrayBuffer()));
        writer.add('d.txt', new Uint8Array(await new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}).arrayBuffer()));
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 4===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array;
    });
    // Tgz.add() Null Directory
    a.t(async()=>{
        const writer = new Tgz.Writer();
        writer.add('a.txt', new Uint8Array(await new File(['aaaaaaa'], 'a.txt').arrayBuffer()));
        writer.add('dir/b.txt', new Uint8Array(await new File(['bbbbbbb'], 'dir/b.txt').arrayBuffer()));
        writer.add('dir/c.txt', new Uint8Array(await new File(['ccccccc'], 'dir/c.txt', {type:'text/plain', lastModified:Date.now()}).arrayBuffer()));
        writer.add('d.txt', new Uint8Array(await new Blob(['ddddddd'], {type:'text/plain', lastModified:Date.now()}).arrayBuffer()));
        writer.add('someDir/');
        console.log(writer.fileData)
        console.log(writer.fileData.length)
        return 5===writer.fileData.length
            && 'a.txt'    ===writer.fileData[0].name && writer.fileData[0].data instanceof Uint8Array
            && 'dir/b.txt'===writer.fileData[1].name && writer.fileData[1].data instanceof Uint8Array
            && 'dir/c.txt'===writer.fileData[2].name && writer.fileData[2].data instanceof Uint8Array
            && 'd.txt'    ===writer.fileData[3].name && writer.fileData[3].data instanceof Uint8Array
            && 'someDir/' ===writer.fileData[4].name && null===writer.fileData[4].data;
    });
    a.fin();
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

