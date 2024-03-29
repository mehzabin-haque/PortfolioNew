'use client'
import React, {useState, useEffect} from "react"
import { ThemeProvider } from "./ThemeProvider"
import ThemeToggler from "./ThemeToggler"
import Logo from "./Logo"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center' />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
        
    </header>
  )
}

export default Header