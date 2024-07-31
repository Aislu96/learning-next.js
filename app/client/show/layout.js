import { Poppins } from "next/font/google";
import "./style.css";

const poppins = Poppins({
    weight: ['400', '700'], // Указывайте используемые веса шрифта
    subsets: ['latin'],     // Указывайте необходимые подмножества
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <h1>Top info</h1>
        {children}
        </body>
        </html>
    );
}
