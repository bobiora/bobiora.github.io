export default function toFix(val){
    val = parseInt(val);
    return "€" + val.toFixed(2)
}