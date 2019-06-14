    function last(x) {
        return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    }
    console.log(last("c a b"));


    // function last(x) {
    //     return x.split(" ").sort((a, b) => a.slice(-1) > b.slice(-1));
    // }

    // const last = s => s.split(" ").sort((v, w) => v.slice(-1).charCodeAt() - w.slice(-1).charCodeAt());



    // const lastChar = (str) => (str[str.length - 1] || '');
    // const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
    // const last = (str) => str.split(' ').sort(sorter);