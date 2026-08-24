function excelSheetcolumnNumber(columnTitle){
    // console.log(columnTitle.charCodeAt());

    let answer = 0;

    for(const ch of columnTitle){
        answer = answer * 26 + ch.charCodeAt() - 'A'.charCodeAt() + 1;
    }

    return answer;
}
// const columnTitle = "ZY";
const columnTitle = "YY";
console.log(excelSheetcolumnNumber(columnTitle));