export default {
    substringStr(str: any, pos: number) {
        // TODO: 한글은 너비가 더 넓은점 참고하여 추후 수정해야함.
        if (str) {
            if (str.length > pos) return str.substring(0, pos) + "..";
            else return str
        } else {
            return ""
        }
    },
}