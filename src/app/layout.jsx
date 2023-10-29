import "public/css/main.css";
import "public/css/all.min.css";

export const metadata = {
  title: 'Video Player | Ashures',
  description: 'Made by Ashures',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
