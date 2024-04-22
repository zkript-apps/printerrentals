import { APP_NAME } from "@/common/constants"
import Home from "@/module/Home"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `Home - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const HomePage = () => {
  return <Home />
}

export default HomePage
