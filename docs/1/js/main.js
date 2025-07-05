window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    const author = 'ytyaru';
    van.add(document.querySelector('main'), 
        van.tags.h1(van.tags.a({href:`https://github.com/${author}/JS.TarGz.20250705174906/`}, 'TarGz')),
        van.tags.p('tgz(tar.gz)の圧縮・展開する。'),
//        van.tags.p('Compress and expand tgz (tar.gz).'),
    );
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make());

    const a = new Assertion();
    a.t(Type.isObj(Tgz));
    a.t(Type.isCls(Tgz.Reader));
    a.t(Type.isCls(Tgz.Writer));
    // Tgz.Writer.add() File/Blob
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
    // Tgz.Writer.add() String
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
    // Tgz.Writer.add() ArrayBuffer
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
    // Tgz.Writer.add() Uint8Array
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
    // Tgz.Writer.add() Null Directory
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
    function mkWriter() {
        const writer = new Tgz.Writer();
        writer.add('a.txt', 'aaaaaaa');
        writer.add('dir/b.txt', 'bbbbbbb');
        writer.add('dir/c.txt', 'ccccccc', {type:'text/plain', lastModified:Date.now()});
        writer.add('d.txt', 'ddddddd');
        writer.add('someDir/');
        return writer;
    }
    // Tgz.Writer.toBlob()
    a.t(async()=>{
        const writer = mkWriter();
        const blob = await writer.toBlob();
        console.log(blob)
        return blob instanceof Blob && 'application/x-gzip'===blob.type;
    });
    // Tgz.Writer.download()
    a.t(async()=>{
        const writer = mkWriter();
        await writer.download();
        return true;
    });
    // Tgz.Reader.fileInfo
    a.t(async()=>{
        const writer = mkWriter();
        const reader = new Tgz.Reader();
        await reader.from(await writer.toBlob());
        console.log(reader.fileInfo);
        return 5===reader.fileInfo.length
            && 'a.txt'    ===reader.fileInfo[0].name && 'file'===reader.fileInfo[0].type
            && 'dir/b.txt'===reader.fileInfo[1].name && 'file'===reader.fileInfo[1].type
            && 'dir/c.txt'===reader.fileInfo[2].name && 'file'===reader.fileInfo[2].type
            && 'd.txt'    ===reader.fileInfo[3].name && 'file'===reader.fileInfo[3].type
            && 'someDir/' ===reader.fileInfo[4].name && 'directory'===reader.fileInfo[4].type;
    });
    // Tgz.Reader.files
    a.t(async()=>{
        const writer = mkWriter();
        const reader = new Tgz.Reader();
        await reader.from(await writer.toBlob());
        const files = [...reader.files];
        console.log(files);
        return 5===files.length
            && 'a.txt'    ===files[0].name && 'aaaaaaa'===await files[0].text()
            && 'dir/b.txt'===files[1].name && 'bbbbbbb'===await files[1].text()
            && 'dir/c.txt'===files[2].name && 'ccccccc'===await files[2].text()
            && 'd.txt'    ===files[3].name && 'ddddddd'===await files[3].text()
            && 'someDir/' ===files[4].name && 0===files[4].size;
    });
    a.fin();
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

