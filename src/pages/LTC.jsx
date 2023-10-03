import Pay from "../components/PaymentModal"

export default function LTC() {

    const Name = "LITECOIN"

    const Min = "2.5"

    const Max = "200"

    const Address = "test-litecoin-litecoin"

    const Qr = `https://chart.apis.google.com/chart?cht=qr&chl=${Address}&chs=150x150&chld=H|0`

    const ICON = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkxpdGVjb2luIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMiAxMiAwIDAwMTIgMHptLS4yNjE3IDMuNjc3N2gyLjU4NGEuMzQyNS4zNDI1IDAgMDEuMzMuNDM1NmwtMi4wMzEyIDYuOTE4IDEuOTA2Mi0uNTgyLS40MDgyIDEuMzg0Ny0xLjkyMzguNTYwNS0xLjI0OCA0LjIxM2g2LjY3NTdhLjM0MjUuMzQyNSAwIDAxLjMyODIuNDM3NGwtLjU4MiAyYS40NTg2LjQ1ODYgMCAwMS0uNDM5NS4zMzAxSDYuNzMyNGwxLjcyMjctNS44MjIzLTEuOTA2My41ODAxLjQyLTEuMzYxMyAxLjkxMDEtLjU4IDIuNDIxOS04LjE3OThhLjQ1NTcuNDU1NyAwIDAxLjQzNzUtLjMzNFoiLz48L3N2Zz4="

    const symbol = "LTC"

    return (
        <>
            <Pay Name={Name}
                Address={Address}
                Icon={ICON}
                Qr={Qr}
                Min={Min}
                Max={Max}
                symbol={symbol} />
        </>
    )

}
