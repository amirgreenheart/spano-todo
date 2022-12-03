'use client'
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Layout } from "@/components/layout";
import { uiTheme } from "../uiTheme/uiTheme";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThemeProvider theme={uiTheme}>
      <Provider store={store} >
        <html lang="en" dir='rtl'>
          <head />
          <body>
            <Layout>
              {children}
              <ToastContainer rtl position="top-right" />
            </Layout>
          </body>
        </html >
      </Provider>
    </ThemeProvider>
  )
}
