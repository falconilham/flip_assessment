export default function convertDate(dateStr){
    let listMonth = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September' , 'Oktober', 'November', 'Desember']
    let newDate = dateStr.slice(0,10)
    let date = newDate.slice(8,10)
    let month =  newDate.slice(5,6) === "0" ? listMonth[newDate.slice(6,7)] : listMonth[newDate.slice(5,7)]
    return `${date} ${month} ${newDate.slice(0,4)}`
} 