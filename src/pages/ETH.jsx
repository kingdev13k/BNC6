import Pay from "../components/PaymentModal"

export default function ETH() {

    const Address = "0xC5743D6C61E54C017964A5955792D38999fCF48A"

    const Name = "ETHEREUM"

    const Min = "1"

    const Max ="100"

    const symbol = "ETH"

    const Qr = `https://chart.apis.google.com/chart?cht=qr&chl=${Address}&chs=150x150&chld=H|0`

    const ICON = "data:image/png;base64,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"

    
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
