import React from "react";


//Child components
export function Header() {
  return (
    <img src="./src/assets/react.svg"></img>
  );
}

export function FactsHeading() {
  return <header> Fun facts about React </header>
}

export function FactsContent() {
  return (
    <>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </>
  );
}

export function Footer() {
  return (
    <footer><small>@C 20xx Upadhyay development. All rights reserved.</small></footer>
  );
}


//Parent Component
export default function Page() {
  return (
    <>
      <Header />
      <FactsHeading />
      <FactsContent />
      <Footer />
    </>
  )
}