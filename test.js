let arr = [
    ["907", "1909", "1929", "1790.87", "00:50:00", "20:00:00"],
    ["908", "1909", "1929", "1790.87", "00:50:00", "20:00:00"],
    ["904", "1909", "1929", "1120.57", "00:30:00", "10:00:00"],
    ["905", "1909", "1929", "1780.47", "13:50:00", "21:40:00"],
    ["906", "1909", "1929", "230.57", "15:50:20", "18:00:00"],
    ["902", "1909", "1929", "1930.27", "12:23:57", "20:00:00"],
    ["874", "1909", "1929", "130.17", "12:00:00", "21:00:00"],
    ["456", "1909", "1929", "1720.37", "14:20:00", "19:33:00"]
]


// function for getting the best time from an array //////////////////////////////// 
function getBestDate() {
    let newArr = []
    let result = []

    for (let j = 0; j <= arr.length - 1; j++) {
        newArr.push(arr[j][4])
    }
    newArr.map((item) => {
        if (item > '12:00:00') {
            result.push(item)
        }
    })
    console.log(result)
}

getBestDate()
/////////////////////////////////////////////////////////////////////////////////////




// function for getting the best price from an array /////////////////////////////////
function getBestPrice() {
    let emptyArr = []
    for (let i = 0; i <= arr.length - 1; i++) {
        emptyArr.push(Number(arr[i][3]))
    }
    let minInt = Math.min(...emptyArr)

    console.log(minInt)

}

getBestPrice()
//////////////////////////////////////////////////////////////////////////////////////




let obj = [
    { trainNum: 907, leavingStation: 1909, arrivalStation: 1929, biletCost: 1790.87, leavingTime: '00:50:00', arrivalTime: '20:00:00' },
    { trainNum: 908, leavingStation: 1909, arrivalStation: 1929, biletCost: 1790.87, leavingTime: '00:50:00', arrivalTime: '20:00:00' },
    { trainNum: 909, leavingStation: 1929, arrivalStation: 1909, biletCost: 1790.87, leavingTime: '10:01:00', arrivalTime: '01:00:00' },
    { trainNum: 909, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '11:10:00', arrivalTime: '01:00:00' },
    { trainNum: 910, leavingStation: 1929, arrivalStation: 1909, biletCost: 1790.87, leavingTime: '10:01:00', arrivalTime: '01:00:00' },
    { trainNum: 910, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '11:10:00', arrivalTime: '01:00:00' },
    { trainNum: 911, leavingStation: 1902, arrivalStation: 1937, biletCost: 191.87, leavingTime: '23:00:00', arrivalTime: '14:40:00' },
    { trainNum: 914, leavingStation: 1937, arrivalStation: 1902, biletCost: 191.89, leavingTime: '09:24:00', arrivalTime: '00:52:00' },
    { trainNum: 917, leavingStation: 1902, arrivalStation: 1929, biletCost: 300.18, leavingTime: '09:25:00', arrivalTime: '20:01:00' },
    { trainNum: 918, leavingStation: 1929, arrivalStation: 1902, biletCost: 300.20, leavingTime: '06:55:00', arrivalTime: '17:10:00' },
    { trainNum: 919, leavingStation: 1902, arrivalStation: 1981, biletCost: 130.60, leavingTime: '04:59:00', arrivalTime: '20:06:00' },
    { trainNum: 920, leavingStation: 1981, arrivalStation: 1902, biletCost: 120.55, leavingTime: '10:00:00', arrivalTime: '01:05:00' },
    { trainNum: 921, leavingStation: 1981, arrivalStation: 1902, biletCost: 120.55, leavingTime: '10:00:00', arrivalTime: '01:05:00' },
    { trainNum: 935, leavingStation: 1981, arrivalStation: 1902, biletCost: 191.48, leavingTime: '20:03:00', arrivalTime: '10:56:00' },
    { trainNum: 936, leavingStation: 1981, arrivalStation: 1902, biletCost: 191.48, leavingTime: '20:03:00', arrivalTime: '10:56:00' },
    { trainNum: 957, leavingStation: 1937, arrivalStation: 1902, biletCost: 131.36, leavingTime: '00:55:00', arrivalTime: '15:02:00' },
    { trainNum: 965, leavingStation: 1902, arrivalStation: 1929, biletCost: 180.27, leavingTime: '09:33:00', arrivalTime: '17:57:00' },
    { trainNum: 966, leavingStation: 1902, arrivalStation: 1929, biletCost: 180.27, leavingTime: '09:33:00', arrivalTime: '17:57:00' },
    { trainNum: 967, leavingStation: 1929, arrivalStation: 1902, biletCost: 180.28, leavingTime: '09:10:00', arrivalTime: '16:35:00' },
    { trainNum: 968, leavingStation: 1929, arrivalStation: 1902, biletCost: 180.28, leavingTime: '09:10:00', arrivalTime: '16:35:00' },
    { trainNum: 970, leavingStation: 1929, arrivalStation: 1921, biletCost: 309.19, leavingTime: '00:24:00', arrivalTime: '15:35:00' },
    { trainNum: 971, leavingStation: 1929, arrivalStation: 1921, biletCost: 309.19, leavingTime: '00:24:00', arrivalTime: '15:35:00' },
    { trainNum: 978, leavingStation: 1902, arrivalStation: 1929, biletCost: 258.53, leavingTime: '04:15:00', arrivalTime: '13:10:00' },
    { trainNum: 979, leavingStation: 1929, arrivalStation: 1902, biletCost: 258.55, leavingTime: '07:16:00', arrivalTime: '14:50:00' },
    { trainNum: 986, leavingStation: 1981, arrivalStation: 1902, biletCost: 157.45, leavingTime: '08:46:00', arrivalTime: '00:50:00' },
    { trainNum: 987, leavingStation: 1902, arrivalStation: 1981, biletCost: 156.90, leavingTime: '02:52:00', arrivalTime: '18:49:00' },
    { trainNum: 995, leavingStation: 1902, arrivalStation: 1981, biletCost: 148.73, leavingTime: '05:27:00', arrivalTime: '20:18:00' },
    { trainNum: 996, leavingStation: 1981, arrivalStation: 1902, biletCost: 149.23, leavingTime: '09:12:00', arrivalTime: '23:27:00' },
    { trainNum: 1002, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '05:52:00', arrivalTime: '20:25:00' },
    { trainNum: 1013, leavingStation: 1921, arrivalStation: 1937, biletCost: 140.51, leavingTime: '07:59:00', arrivalTime: '18:03:00' },
    { trainNum: 1006, leavingStation: 1921, arrivalStation: 1929, biletCost: 142.13, leavingTime: '12:07:00', arrivalTime: '02:06:00' },
    { trainNum: 1025, leavingStation: 1921, arrivalStation: 1902, biletCost: 164.65, leavingTime: '07:08:00', arrivalTime: '22:20:00' },
    { trainNum: 1026, leavingStation: 1902, arrivalStation: 1921, biletCost: 164.63, leavingTime: '06:46:00', arrivalTime: '22:23:00' },
    { trainNum: 1035, leavingStation: 1929, arrivalStation: 1921, biletCost: 181.05, leavingTime: '22:07:00', arrivalTime: '12:15:00' },
    { trainNum: 1050, leavingStation: 1981, arrivalStation: 1902, biletCost: 227.88, leavingTime: '18:04:00', arrivalTime: '08:44:00' },
    { trainNum: 1066, leavingStation: 1902, arrivalStation: 1981, biletCost: 152.58, leavingTime: '03:47:00', arrivalTime: '18:37:00' },
    { trainNum: 1067, leavingStation: 1981, arrivalStation: 1902, biletCost: 153.10, leavingTime: '07:41:00', arrivalTime: '22:00:00' },
    { trainNum: 1068, leavingStation: 1921, arrivalStation: 1929, biletCost: 130.36, leavingTime: '06:45:00', arrivalTime: '21:22:00' },
    { trainNum: 1088, leavingStation: 1902, arrivalStation: 1981, biletCost: 197.35, leavingTime: '06:26:00', arrivalTime: '22:40:00' },
    { trainNum: 1093, leavingStation: 1981, arrivalStation: 1902, biletCost: 198.07, leavingTime: '06:40:00', arrivalTime: '22:53:00' },
    { trainNum: 1098, leavingStation: 1937, arrivalStation: 1902, biletCost: 166.55, leavingTime: '00:30:00', arrivalTime: '14:42:00' },
    { trainNum: 1099, leavingStation: 1937, arrivalStation: 1902, biletCost: 166.55, leavingTime: '00:30:00', arrivalTime: '14:42:00' },
    { trainNum: 1100, leavingStation: 1937, arrivalStation: 1902, biletCost: 166.55, leavingTime: '00:30:00', arrivalTime: '14:42:00' },
    { trainNum: 1105, leavingStation: 1902, arrivalStation: 1981, biletCost: 138.54, leavingTime: '00:14:00', arrivalTime: '15:22:00' },
    { trainNum: 1106, leavingStation: 1981, arrivalStation: 1902, biletCost: 151.56, leavingTime: '07:21:00', arrivalTime: '23:16:00' },
    { trainNum: 1108, leavingStation: 1929, arrivalStation: 1921, biletCost: 166.55, leavingTime: '22:34:00', arrivalTime: '13:03:00' },
    { trainNum: 1115, leavingStation: 1902, arrivalStation: 1937, biletCost: 183.82, leavingTime: '06:41:00', arrivalTime: '22:01:00' },
    { trainNum: 1116, leavingStation: 1937, arrivalStation: 1902, biletCost: 183.84, leavingTime: '20:09:00', arrivalTime: '11:36:00' },
    { trainNum: 1119, leavingStation: 1902, arrivalStation: 1921, biletCost: 171.82, leavingTime: '02:03:00', arrivalTime: '17:30:00' },
    { trainNum: 1120, leavingStation: 1902, arrivalStation: 1921, biletCost: 171.82, leavingTime: '02:03:00', arrivalTime: '17:30:00' },
    { trainNum: 1121, leavingStation: 1902, arrivalStation: 1921, biletCost: 171.82, leavingTime: '02:03:00', arrivalTime: '17:30:00' },
    { trainNum: 1125, leavingStation: 1921, arrivalStation: 1902, biletCost: 115.84, leavingTime: '03:44:00', arrivalTime: '18:51:00' },
    { trainNum: 1125, leavingStation: 1921, arrivalStation: 1981, biletCost: 192.03, leavingTime: '13:25:00', arrivalTime: '18:51:00' },
    { trainNum: 1126, leavingStation: 1981, arrivalStation: 1902, biletCost: 192.87, leavingTime: '02:42:00', arrivalTime: '17:36:00' },
    { trainNum: 1126, leavingStation: 1902, arrivalStation: 1921, biletCost: 172.54, leavingTime: '11:20:00', arrivalTime: '03:02:00' },
    { trainNum: 1126, leavingStation: 1981, arrivalStation: 1921, biletCost: 314.35, leavingTime: '11:20:00', arrivalTime: '17:36:00' },
    { trainNum: 1137, leavingStation: 1902, arrivalStation: 1937, biletCost: 131.34, leavingTime: '19:53:00', arrivalTime: '08:21:00' },
    { trainNum: 1138, leavingStation: 1937, arrivalStation: 1902, biletCost: 171.74, leavingTime: '07:03:00', arrivalTime: '19:11:00' },
    { trainNum: 1139, leavingStation: 1902, arrivalStation: 1921, biletCost: 114.11, leavingTime: '00:03:00', arrivalTime: '14:32:00' },
    { trainNum: 1140, leavingStation: 1921, arrivalStation: 1902, biletCost: 114.12, leavingTime: '09:39:00', arrivalTime: '00:15:00' },
    { trainNum: 1141, leavingStation: 1902, arrivalStation: 1929, biletCost: 176.77, leavingTime: '12:15:00', arrivalTime: '16:48:00' },
    { trainNum: 1142, leavingStation: 1902, arrivalStation: 1929, biletCost: 176.77, leavingTime: '12:15:00', arrivalTime: '16:48:00' },
    { trainNum: 1143, leavingStation: 1929, arrivalStation: 1902, biletCost: 176.78, leavingTime: '13:38:00', arrivalTime: '19:47:00' },
    { trainNum: 1144, leavingStation: 1929, arrivalStation: 1902, biletCost: 176.78, leavingTime: '13:38:00', arrivalTime: '19:47:00' },
    { trainNum: 1145, leavingStation: 1929, arrivalStation: 1902, biletCost: 176.78, leavingTime: '13:38:00', arrivalTime: '19:47:00' },
    { trainNum: 1146, leavingStation: 1929, arrivalStation: 1937, biletCost: 134.11, leavingTime: '22:07:00', arrivalTime: '11:35:00' },
    { trainNum: 1147, leavingStation: 1929, arrivalStation: 1937, biletCost: 134.11, leavingTime: '22:07:00', arrivalTime: '11:35:00' },
    { trainNum: 1148, leavingStation: 1937, arrivalStation: 1929, biletCost: 134.11, leavingTime: '09:40:00', arrivalTime: '23:04:00' },
    { trainNum: 1149, leavingStation: 1937, arrivalStation: 1929, biletCost: 134.11, leavingTime: '09:40:00', arrivalTime: '23:04:00' },
    { trainNum: 1155, leavingStation: 1937, arrivalStation: 1981, biletCost: 140.51, leavingTime: '03:30:00', arrivalTime: '15:49:00' },
    { trainNum: 1156, leavingStation: 1981, arrivalStation: 1937, biletCost: 140.98, leavingTime: '09:21:00', arrivalTime: '21:31:00' },
    { trainNum: 1162, leavingStation: 1929, arrivalStation: 1921, biletCost: 173.83, leavingTime: '17:28:00', arrivalTime: '07:55:00' },
    { trainNum: 1163, leavingStation: 1902, arrivalStation: 1981, biletCost: 131.84, leavingTime: '04:37:00', arrivalTime: '15:52:00' },
    { trainNum: 1167, leavingStation: 1981, arrivalStation: 1902, biletCost: 132.29, leavingTime: '10:35:00', arrivalTime: '21:45:00' },
    { trainNum: 1169, leavingStation: 1981, arrivalStation: 1902, biletCost: 180.58, leavingTime: '06:12:00', arrivalTime: '20:00:00' },
    { trainNum: 1170, leavingStation: 1902, arrivalStation: 1981, biletCost: 179.94, leavingTime: '06:42:00', arrivalTime: '21:00:00' },
    { trainNum: 1171, leavingStation: 1909, arrivalStation: 1921, biletCost: 1407.37, leavingTime: '12:17:00', arrivalTime: '15:47:00' },
    { trainNum: 1172, leavingStation: 1909, arrivalStation: 1921, biletCost: 1407.37, leavingTime: '12:17:00', arrivalTime: '15:47:00' },
    { trainNum: 1177, leavingStation: 1902, arrivalStation: 1929, biletCost: 164.65, leavingTime: '10:25:00', arrivalTime: '16:36:00' },
    { trainNum: 1178, leavingStation: 1902, arrivalStation: 1929, biletCost: 164.65, leavingTime: '10:25:00', arrivalTime: '16:36:00' },
    { trainNum: 1179, leavingStation: 1929, arrivalStation: 1902, biletCost: 164.67, leavingTime: '13:12:00', arrivalTime: '19:55:00' },
    { trainNum: 1180, leavingStation: 1929, arrivalStation: 1902, biletCost: 164.67, leavingTime: '13:12:00', arrivalTime: '19:55:00' },
    { trainNum: 1181, leavingStation: 1902, arrivalStation: 1937, biletCost: 131.34, leavingTime: '04:50:00', arrivalTime: '15:52:00' },
    { trainNum: 1182, leavingStation: 1937, arrivalStation: 1902, biletCost: 131.36, leavingTime: '10:36:00', arrivalTime: '21:36:00' },
    { trainNum: 1190, leavingStation: 1921, arrivalStation: 1902, biletCost: 245.02, leavingTime: '23:21:00', arrivalTime: '18:43:00' },
    { trainNum: 1191, leavingStation: 1902, arrivalStation: 1921, biletCost: 245.00, leavingTime: '10:56:00', arrivalTime: '06:20:00' },
    { trainNum: 1197, leavingStation: 1921, arrivalStation: 1902, biletCost: 245.02, leavingTime: '11:37:00', arrivalTime: '06:56:00' },
    { trainNum: 1198, leavingStation: 1902, arrivalStation: 1921, biletCost: 245.00, leavingTime: '18:11:00', arrivalTime: '13:37:00' },
    { trainNum: 1209, leavingStation: 1902, arrivalStation: 1981, biletCost: 273.19, leavingTime: '22:20:00', arrivalTime: '17:26:00' },
    { trainNum: 1212, leavingStation: 1981, arrivalStation: 1902, biletCost: 274.51, leavingTime: '10:45:00', arrivalTime: '05:50:00' },
    { trainNum: 1225, leavingStation: 1921, arrivalStation: 1929, biletCost: 270.29, leavingTime: '13:52:00', arrivalTime: '07:00:00' },
    { trainNum: 1226, leavingStation: 1929, arrivalStation: 1921, biletCost: 270.29, leavingTime: '22:13:00', arrivalTime: '15:18:00' },
    { trainNum: 1245, leavingStation: 1902, arrivalStation: 1929, biletCost: 225.49, leavingTime: '12:15:00', arrivalTime: '16:48:00' },
    { trainNum: 1246, leavingStation: 1929, arrivalStation: 1902, biletCost: 247.29, leavingTime: '13:38:00', arrivalTime: '19:47:00' },
    { trainNum: 1249, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '01:09:00', arrivalTime: '16:05:00' },
    { trainNum: 1262, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '08:53:00', arrivalTime: '23:30:00' },
    { trainNum: 1287, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '08:53:00', arrivalTime: '23:30:00' },
    { trainNum: 1288, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '08:53:00', arrivalTime: '23:30:00' },
    { trainNum: 1298, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '18:00:00', arrivalTime: '09:00:00' },
    { trainNum: 1311, leavingStation: 1981, arrivalStation: 1937, biletCost: 192.33, leavingTime: '07:08:00', arrivalTime: '19:06:00' },
    { trainNum: 1312, leavingStation: 1937, arrivalStation: 1981, biletCost: 175.02, leavingTime: '10:01:00', arrivalTime: '22:17:00' },
    { trainNum: 1315, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '14:24:00', arrivalTime: '04:55:00' },
    { trainNum: 1316, leavingStation: 1902, arrivalStation: 1929, biletCost: 209.73, leavingTime: '05:55:00', arrivalTime: '13:52:00' },
    { trainNum: 1317, leavingStation: 1929, arrivalStation: 1902, biletCost: 229.77, leavingTime: '03:59:00', arrivalTime: '12:05:00' },
    { trainNum: 1323, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '06:32:00', arrivalTime: '21:07:00' },
    { trainNum: 1328, leavingStation: 1902, arrivalStation: 1929, biletCost: 209.73, leavingTime: '09:05:00', arrivalTime: '17:00:00' },
    { trainNum: 1329, leavingStation: 1929, arrivalStation: 1902, biletCost: 209.74, leavingTime: '09:30:00', arrivalTime: '16:25:00' },
    { trainNum: 1331, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '05:38:00', arrivalTime: '19:30:00' },
    { trainNum: 1342, leavingStation: 1921, arrivalStation: 1909, biletCost: 1421.12, leavingTime: '13:44:00', arrivalTime: '13:52:00' },
    { trainNum: 1349, leavingStation: 1981, arrivalStation: 1929, biletCost: 284.84, leavingTime: '14:35:00', arrivalTime: '13:57:00' },
    { trainNum: 1350, leavingStation: 1929, arrivalStation: 1981, biletCost: 312.42, leavingTime: '18:41:00', arrivalTime: '17:40:00' },
    { trainNum: 1351, leavingStation: 1929, arrivalStation: 1981, biletCost: 312.42, leavingTime: '18:41:00', arrivalTime: '17:40:00' },
    { trainNum: 1353, leavingStation: 1929, arrivalStation: 1921, biletCost: 214.08, leavingTime: '20:19:00', arrivalTime: '09:55:00' },
    { trainNum: 1357, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '05:52:00', arrivalTime: '20:25:00' },
    { trainNum: 1362, leavingStation: 1929, arrivalStation: 1921, biletCost: 214.08, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1363, leavingStation: 1929, arrivalStation: 1921, biletCost: 214.08, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1365, leavingStation: 1909, arrivalStation: 1929, biletCost: 1790.87, leavingTime: '15:50:00', arrivalTime: '02:40:00' },
    { trainNum: 1366, leavingStation: 1909, arrivalStation: 1929, biletCost: 1790.87, leavingTime: '15:50:00', arrivalTime: '02:40:00' },
    { trainNum: 1367, leavingStation: 1921, arrivalStation: 1909, biletCost: 1421.12, leavingTime: '11:21:00', arrivalTime: '11:11:00' },
    { trainNum: 1367, leavingStation: 1929, arrivalStation: 1909, biletCost: 1790.87, leavingTime: '11:21:00', arrivalTime: '00:30:00' },
    { trainNum: 1367, leavingStation: 1929, arrivalStation: 1921, biletCost: 199.15, leavingTime: '10:38:00', arrivalTime: '00:30:00' },
    { trainNum: 1369, leavingStation: 1921, arrivalStation: 1909, biletCost: 1421.12, leavingTime: '05:35:00', arrivalTime: '07:30:00' },
    { trainNum: 1370, leavingStation: 1921, arrivalStation: 1909, biletCost: 1421.12, leavingTime: '05:35:00', arrivalTime: '07:30:00' },
    { trainNum: 1371, leavingStation: 1921, arrivalStation: 1909, biletCost: 1421.12, leavingTime: '05:35:00', arrivalTime: '07:30:00' },
    { trainNum: 1382, leavingStation: 1902, arrivalStation: 1929, biletCost: 225.49, leavingTime: '14:45:00', arrivalTime: '21:50:00' },
    { trainNum: 1383, leavingStation: 1929, arrivalStation: 1902, biletCost: 225.50, leavingTime: '12:06:00', arrivalTime: '19:00:00' },
    { trainNum: 1386, leavingStation: 1902, arrivalStation: 1929, biletCost: 220.49, leavingTime: '08:30:00', arrivalTime: '13:03:00' },
    { trainNum: 1387, leavingStation: 1929, arrivalStation: 1902, biletCost: 242.29, leavingTime: '04:21:00', arrivalTime: '10:26:00' },
    { trainNum: 1391, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1392, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1393, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1394, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1395, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1396, leavingStation: 1929, arrivalStation: 1921, biletCost: 206.43, leavingTime: '12:17:00', arrivalTime: '01:40:00' },
    { trainNum: 1397, leavingStation: 1921, arrivalStation: 1929, biletCost: 162.13, leavingTime: '02:30:00', arrivalTime: '16:57:00' },
    { trainNum: 1398, leavingStation: 1929, arrivalStation: 1921, biletCost: 162.13, leavingTime: '21:01:00', arrivalTime: '11:05:00' },
    { trainNum: 1405, leavingStation: 1981, arrivalStation: 1929, biletCost: 330.59, leavingTime: '17:40:00', arrivalTime: '16:21:00' },
    { trainNum: 1406, leavingStation: 1902, arrivalStation: 1929, biletCost: 194.36, leavingTime: '13:32:00', arrivalTime: '23:01:00' },
    { trainNum: 1407, leavingStation: 1902, arrivalStation: 1929, biletCost: 194.36, leavingTime: '13:32:00', arrivalTime: '23:01:00' },
    { trainNum: 1408, leavingStation: 1929, arrivalStation: 1902, biletCost: 194.37, leavingTime: '11:08:00', arrivalTime: '20:17:00' },
    { trainNum: 1412, leavingStation: 1937, arrivalStation: 1929, biletCost: 162.86, leavingTime: '11:52:00', arrivalTime: '23:59:00' },
    { trainNum: 1413, leavingStation: 1929, arrivalStation: 1937, biletCost: 162.86, leavingTime: '04:40:00', arrivalTime: '16:45:00' },
    { trainNum: 1470, leavingStation: 1929, arrivalStation: 1921, biletCost: 190.80, leavingTime: '05:38:00', arrivalTime: '19:30:00' },
    { trainNum: 1475, leavingStation: 1921, arrivalStation: 1937, biletCost: 238.22, leavingTime: '09:39:00', arrivalTime: '16:00:00' },
    { trainNum: 1492, leavingStation: 1937, arrivalStation: 1921, biletCost: 233.91, leavingTime: '10:30:00', arrivalTime: '17:25:00' },
    { trainNum: 1701, leavingStation: 1921, arrivalStation: 1902, biletCost: 181.00, leavingTime: '09:00:00', arrivalTime: '00:15:00' },
    { trainNum: 1702, leavingStation: 1921, arrivalStation: 1902, biletCost: 181.00, leavingTime: '00:30:00', arrivalTime: '17:00:00' },
    { trainNum: 1703, leavingStation: 1902, arrivalStation: 1937, biletCost: 217.61, leavingTime: '11:10:00', arrivalTime: '04:00:00' },
    { trainNum: 1704, leavingStation: 1902, arrivalStation: 1937, biletCost: 217.61, leavingTime: '11:10:00', arrivalTime: '04:00:00' },
    { trainNum: 1705, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '12:45:00', arrivalTime: '06:00:00' },
    { trainNum: 1706, leavingStation: 1902, arrivalStation: 1937, biletCost: 175.04, leavingTime: '14:05:00', arrivalTime: '06:10:00' },
    { trainNum: 1707, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '13:45:00', arrivalTime: '07:00:00' },
    { trainNum: 1708, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '14:35:00', arrivalTime: '07:30:00' },
    { trainNum: 1709, leavingStation: 1902, arrivalStation: 1937, biletCost: 270.00, leavingTime: '14:50:00', arrivalTime: '08:05:00' },
    { trainNum: 1710, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.29, leavingTime: '15:20:00', arrivalTime: '08:45:00' },
    { trainNum: 1711, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '15:45:00', arrivalTime: '09:00:00' },
    { trainNum: 1712, leavingStation: 1902, arrivalStation: 1937, biletCost: 181.78, leavingTime: '17:25:00', arrivalTime: '09:25:00' },
    { trainNum: 1713, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.99, leavingTime: '17:50:00', arrivalTime: '10:15:00' },
    { trainNum: 1714, leavingStation: 1902, arrivalStation: 1937, biletCost: 217.61, leavingTime: '17:00:00', arrivalTime: '10:15:00' },
    { trainNum: 1715, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '17:45:00', arrivalTime: '11:00:00' },
    { trainNum: 1716, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '18:15:00', arrivalTime: '11:30:00' },
    { trainNum: 1717, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.29, leavingTime: '18:05:00', arrivalTime: '12:00:00' },
    { trainNum: 1718, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '19:40:00', arrivalTime: '12:45:00' },
    { trainNum: 1719, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '19:45:00', arrivalTime: '13:00:00' },
    { trainNum: 1720, leavingStation: 1902, arrivalStation: 1937, biletCost: 240.00, leavingTime: '20:20:00', arrivalTime: '13:40:00' },
    { trainNum: 1721, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '20:45:00', arrivalTime: '14:00:00' },
    { trainNum: 1722, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.26, leavingTime: '22:35:00', arrivalTime: '14:35:00' },
    { trainNum: 1723, leavingStation: 1902, arrivalStation: 1937, biletCost: 175.04, leavingTime: '22:20:00', arrivalTime: '15:10:00' },
    { trainNum: 1724, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '22:15:00', arrivalTime: '15:30:00' },
    { trainNum: 1725, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '23:10:00', arrivalTime: '16:30:00' },
    { trainNum: 1726, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '00:00:00', arrivalTime: '17:15:00' },
    { trainNum: 1727, leavingStation: 1902, arrivalStation: 1937, biletCost: 202.72, leavingTime: '01:55:00', arrivalTime: '17:25:00' },
    { trainNum: 1728, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.29, leavingTime: '00:25:00', arrivalTime: '18:00:00' },
    { trainNum: 1729, leavingStation: 1902, arrivalStation: 1937, biletCost: 240.00, leavingTime: '01:15:00', arrivalTime: '18:30:00' },
    { trainNum: 1730, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '01:45:00', arrivalTime: '19:00:00' },
    { trainNum: 1731, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '02:45:00', arrivalTime: '20:00:00' },
    { trainNum: 1732, leavingStation: 1902, arrivalStation: 1937, biletCost: 208.74, leavingTime: '04:25:00', arrivalTime: '21:00:00' },
    { trainNum: 1733, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '03:45:00', arrivalTime: '21:00:00' },
    { trainNum: 1734, leavingStation: 1902, arrivalStation: 1937, biletCost: 186.00, leavingTime: '04:30:00', arrivalTime: '21:05:00' },
    { trainNum: 1735, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '05:45:00', arrivalTime: '21:45:00' },
    { trainNum: 1736, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '04:58:00', arrivalTime: '22:00:00' },
    { trainNum: 1737, leavingStation: 1902, arrivalStation: 1937, biletCost: 190.01, leavingTime: '05:15:00', arrivalTime: '22:30:00' },
    { trainNum: 1738, leavingStation: 1902, arrivalStation: 1937, biletCost: 240.00, leavingTime: '05:10:00', arrivalTime: '23:00:00' },
    { trainNum: 1739, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.29, leavingTime: '05:45:00', arrivalTime: '23:45:00' },
    { trainNum: 1801, leavingStation: 1937, arrivalStation: 1902, biletCost: 236.00, leavingTime: '07:25:00', arrivalTime: '00:35:00' },
    { trainNum: 1802, leavingStation: 1937, arrivalStation: 1902, biletCost: 236.00, leavingTime: '11:45:00', arrivalTime: '05:00:00' },
    { trainNum: 1803, leavingStation: 1937, arrivalStation: 1902, biletCost: 236.00, leavingTime: '20:00:00', arrivalTime: '13:50:00' },
    { trainNum: 1804, leavingStation: 1937, arrivalStation: 1902, biletCost: 266.00, leavingTime: '23:55:00', arrivalTime: '17:15:00' },
    { trainNum: 1805, leavingStation: 1937, arrivalStation: 1902, biletCost: 196.00, leavingTime: '04:35:00', arrivalTime: '21:15:00' },
    { trainNum: 1806, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '14:40:00', arrivalTime: '07:20:00' },
    { trainNum: 1807, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '15:30:00', arrivalTime: '08:00:00' },
    { trainNum: 1808, leavingStation: 1902, arrivalStation: 1921, biletCost: 188.66, leavingTime: '18:00:00', arrivalTime: '10:05:00' },
    { trainNum: 1809, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '18:35:00', arrivalTime: '11:00:00' },
    { trainNum: 1810, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '19:40:00', arrivalTime: '12:00:00' },
    { trainNum: 1811, leavingStation: 1902, arrivalStation: 1921, biletCost: 188.52, leavingTime: '22:00:00', arrivalTime: '13:30:00' },
    { trainNum: 1812, leavingStation: 1902, arrivalStation: 1921, biletCost: 161.35, leavingTime: '21:35:00', arrivalTime: '14:25:00' },
    { trainNum: 1813, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '22:45:00', arrivalTime: '15:15:00' },
    { trainNum: 1814, leavingStation: 1902, arrivalStation: 1921, biletCost: 190.01, leavingTime: '23:50:00', arrivalTime: '15:40:00' },
    { trainNum: 1815, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '00:25:00', arrivalTime: '17:00:00' },
    { trainNum: 1816, leavingStation: 1902, arrivalStation: 1921, biletCost: 161.35, leavingTime: '01:50:00', arrivalTime: '18:00:00' },
    { trainNum: 1817, leavingStation: 1902, arrivalStation: 1921, biletCost: 234.99, leavingTime: '02:30:00', arrivalTime: '19:30:00' },
    { trainNum: 1818, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '05:45:00', arrivalTime: '22:15:00' },
    { trainNum: 1819, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '06:10:00', arrivalTime: '22:45:00' },
    { trainNum: 1820, leavingStation: 1902, arrivalStation: 1921, biletCost: 181.64, leavingTime: '07:50:00', arrivalTime: '23:35:00' },
    { trainNum: 1821, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '07:20:00', arrivalTime: '23:50:00' },
    { trainNum: 1901, leavingStation: 1902, arrivalStation: 1921, biletCost: 234.99, leavingTime: '02:30:00', arrivalTime: '19:30:00' },
    { trainNum: 1902, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.00, leavingTime: '07:20:00', arrivalTime: '23:50:00' },
    { trainNum: 2001, leavingStation: 1902, arrivalStation: 1921, biletCost: 139.98, leavingTime: '20:10:00', arrivalTime: '12:30:00' },
    { trainNum: 2002, leavingStation: 1902, arrivalStation: 1937, biletCost: 181.78, leavingTime: '04:35:00', arrivalTime: '20:20:00' },
    { trainNum: 2003, leavingStation: 1902, arrivalStation: 1937, biletCost: 165.01, leavingTime: '04:35:00', arrivalTime: '20:20:00' },
    { trainNum: 2101, leavingStation: 1937, arrivalStation: 1902, biletCost: 196.00, leavingTime: '20:00:00', arrivalTime: '14:10:00' },
    { trainNum: 2201, leavingStation: 1902, arrivalStation: 1929, biletCost: 280.00, leavingTime: '06:15:00', arrivalTime: '14:55:00' },
    { trainNum: 2202, leavingStation: 1902, arrivalStation: 1929, biletCost: 270.00, leavingTime: '10:10:00', arrivalTime: '17:30:00' },
    { trainNum: 2203, leavingStation: 1902, arrivalStation: 1929, biletCost: 319.76, leavingTime: '13:15:00', arrivalTime: '17:55:00' },
    { trainNum: 2301, leavingStation: 1937, arrivalStation: 1902, biletCost: 196.00, leavingTime: '11:45:00', arrivalTime: '04:55:00' },
    { trainNum: 2501, leavingStation: 1937, arrivalStation: 1902, biletCost: 236.00, leavingTime: '07:40:00', arrivalTime: '00:50:00' },
    { trainNum: 2701, leavingStation: 1902, arrivalStation: 1929, biletCost: 315.01, leavingTime: '08:00:00', arrivalTime: '16:30:00' },
    { trainNum: 2702, leavingStation: 1902, arrivalStation: 1929, biletCost: 315.01, leavingTime: '08:00:00', arrivalTime: '16:30:00' },
    { trainNum: 2703, leavingStation: 1902, arrivalStation: 1929, biletCost: 315.01, leavingTime: '08:00:00', arrivalTime: '16:30:00' },
    { trainNum: 2901, leavingStation: 1902, arrivalStation: 1981, biletCost: 191.68, leavingTime: '03:25:00', arrivalTime: '16:20:00' },
    { trainNum: 2902, leavingStation: 1902, arrivalStation: 1981, biletCost: 193.55, leavingTime: '06:05:00', arrivalTime: '21:20:00' },
    { trainNum: 2903, leavingStation: 1902, arrivalStation: 1981, biletCost: 195.00, leavingTime: '06:40:00', arrivalTime: '22:05:00' },
    { trainNum: 3001, leavingStation: 1902, arrivalStation: 1981, biletCost: 191.68, leavingTime: '03:25:00', arrivalTime: '16:20:00' },
    { trainNum: 3101, leavingStation: 1902, arrivalStation: 1937, biletCost: 199.99, leavingTime: '05:05:00', arrivalTime: '23:10:00' },
    { trainNum: 3501, leavingStation: 1902, arrivalStation: 1937, biletCost: 218.23, leavingTime: '06:50:00', arrivalTime: '22:20:00' },
    { trainNum: 4101, leavingStation: 1902, arrivalStation: 1929, biletCost: 280.00, leavingTime: '06:15:00', arrivalTime: '14:55:00' },
    { trainNum: 4201, leavingStation: 1929, arrivalStation: 1902, biletCost: 334.56, leavingTime: '08:40:00', arrivalTime: '13:50:00' },
    { trainNum: 4202, leavingStation: 1929, arrivalStation: 1902, biletCost: 277.50, leavingTime: '06:35:00', arrivalTime: '15:15:00' },
    { trainNum: 4203, leavingStation: 1929, arrivalStation: 1902, biletCost: 269.00, leavingTime: '09:20:00', arrivalTime: '16:50:00' },
    { trainNum: 4701, leavingStation: 1902, arrivalStation: 1921, biletCost: 185.93, leavingTime: '01:50:00', arrivalTime: '18:00:00' },
    { trainNum: 5101, leavingStation: 1929, arrivalStation: 1937, biletCost: 189.21, leavingTime: '22:30:00', arrivalTime: '12:25:00' },
    { trainNum: 5102, leavingStation: 1929, arrivalStation: 1937, biletCost: 209.64, leavingTime: '04:15:00', arrivalTime: '18:00:00' },
    { trainNum: 5103, leavingStation: 1929, arrivalStation: 1937, biletCost: 243.68, leavingTime: '08:15:00', arrivalTime: '21:20:00' },
    { trainNum: 5201, leavingStation: 1929, arrivalStation: 1937, biletCost: 189.21, leavingTime: '22:30:00', arrivalTime: '12:25:00' },
    { trainNum: 5202, leavingStation: 1929, arrivalStation: 1937, biletCost: 189.21, leavingTime: '04:15:00', arrivalTime: '18:00:00' },
    { trainNum: 6001, leavingStation: 1902, arrivalStation: 1937, biletCost: 177.78, leavingTime: '04:35:00', arrivalTime: '20:20:00' },
    { trainNum: 6002, leavingStation: 1902, arrivalStation: 1937, biletCost: 184.52, leavingTime: '05:10:00', arrivalTime: '22:10:00' },
    { trainNum: 6901, leavingStation: 1902, arrivalStation: 1981, biletCost: 232.55, leavingTime: '17:20:00', arrivalTime: '07:10:00' },
    { trainNum: 7001, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '14:29:00', arrivalTime: '07:30:00' },
    { trainNum: 7002, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '19:34:00', arrivalTime: '12:45:00' },
    { trainNum: 7003, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '22:59:00', arrivalTime: '16:30:00' },
    { trainNum: 7004, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '04:44:00', arrivalTime: '22:00:00' },
    { trainNum: 7501, leavingStation: 1902, arrivalStation: 1921, biletCost: 204.38, leavingTime: '05:20:00', arrivalTime: '21:10:00' },
    { trainNum: 7901, leavingStation: 1902, arrivalStation: 1981, biletCost: 193.55, leavingTime: '06:25:00', arrivalTime: '21:40:00' },
    { trainNum: 8101, leavingStation: 1902, arrivalStation: 1981, biletCost: 193.55, leavingTime: '05:45:00', arrivalTime: '21:00:00' },
    { trainNum: 8501, leavingStation: 1902, arrivalStation: 1937, biletCost: 195.00, leavingTime: '05:50:00', arrivalTime: '21:50:00' },
    { trainNum: 8701, leavingStation: 1902, arrivalStation: 1981, biletCost: 193.55, leavingTime: '05:55:00', arrivalTime: '21:10:00' },
    { trainNum: 8801, leavingStation: 1902, arrivalStation: 1981, biletCost: 193.40, leavingTime: '06:35:00', arrivalTime: '19:30:00' },
    { trainNum: 8901, leavingStation: 1937, arrivalStation: 1902, biletCost: 236.00, leavingTime: '21:35:00', arrivalTime: '15:25:00' },
    { trainNum: 9101, leavingStation: 1902, arrivalStation: 1921, biletCost: 160.56, leavingTime: '05:15:00', arrivalTime: '20:50:00' }
]


function getTheBest() {
    return obj.filter(item => item.biletCost <= 200 && item.leavingTime >= '08:00:00' && item.arrivalTime >= '16:00:00')
}
console.log(getTheBest())










