import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import LeftSideBar from "@components/layout/LeftSideBar";
import RightSideBar from "@components/layout/RightSideBar";
import MainContainer from "@components/layout/MainContainer";
import BottomBar from "@components/layout/BottomBar";
export const metadata = {
  title: "Vibe Zon",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
