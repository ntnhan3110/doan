
        function show1(obj) {
        a = obj;
        console.log(a.id);
        switch (a.id) {
            case 'gt':
                var gioiThieu = document.getElementById("gioithieu").innerHTML;
                document.getElementById("tong").innerHTML = gioiThieu;
                break;
            case 'dt':
                var doiTra = document.getElementById("doitra").innerHTML;
                document.getElementById("tong").innerHTML = doiTra;
                break;
            case 'bm':
                var baoMat = document.getElementById("baomat").innerHTML;
                document.getElementById("tong").innerHTML = baoMat;
                break;
            case 'gh':
                var giaoHang = document.getElementById("giaohang").innerHTML;
                document.getElementById("tong").innerHTML = giaoHang;
                break;
            case 'bh':
                var baoHanh = document.getElementById("baohanh").innerHTML;
                document.getElementById("tong").innerHTML = baoHanh;
                break;
            case 'dv':
                var dichVu = document.getElementById("dichvu").innerHTML;
                document.getElementById("tong").innerHTML = dichVu;
                break;
            default:
                var thanhToan = document.getElementById("thanhtoan").innerHTML;
                document.getElementById("tong").innerHTML = thanhToan;
                break;
        }
    }