import * as React from 'react';
import Image from 'next/image'
import Head from 'next/head'

class App extends React.Component {

  render() {
    return (
      <div className="p-10 space-y-10">
        <Head>
          <title>OpenSesame</title>
          <meta name="description" content="Native and encrypted password manager for iOS and macOS." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="App-header container mx-auto">
          <div className="mx-auto w-1/3">
            <Image src={'/logo.png'} alt="Logo" width={300} height={300} layout="responsive" />
          </div>
          <div className="mx-auto space-y-5">
            <h1 className="text-center text-6xl font-semibold font-mono">OpenSesame</h1>
            <h2 className="text-center text-3xl font-semibold font-mono opacity-70">Native, secure, open.</h2>
            <div className="flex flex-col justify-center items-center text-center">
              <a href="https://github.com/OpenSesameManager/OpenSesame" className="mx-auto bg-blue-500 w-full md:w-1/3 p-4 rounded-xl shadow-xl font-bold text-gray-50 text-xl transform transition-all duration-500 ease-in-out hover:scale-95 hover:shadow-lg">View the source code</a>
            </div>
          </div>
        </header>
        <div className="space-y-5">
          {this.detailView('What is it?', (
            <p>OpenSesame is a free and powerful password manager that lets you manage your passwords with ease. It syncs with iCloud and encrypts your data to make sure only you get access. No more required subscriptions, no more ram hogs, and no more electron versions.</p>
          ))}

          {this.detailView('Why use OpenSesame?', (
            <p>Now more than ever, what was previously amazing native apps have become slow and big web apps. Big apps take more control away from the user and push subscriptions and other payment models without much reason. OpenSesame aims to fix that by giving a free and open source password manager that is native and performant. Still get all the great features of other password managers without all the baggage.</p>
          ))}

          {this.detailView('Features', (
            <ul className="list-disc list-inside">
              <li>iCloud Syncing</li>
              <li>OTP Auth (Two Factor Authentication)</li>
              <li>Safari Autofill</li>
              <li>On-Device AES encryption</li>
              <li>Biometrics unlock</li>
              <li>Pinned accounts</li>
              <li>Multiple vaults</li>
              <li>Multipeer account sharing</li>
              <li>Import/Export</li>
              <li>Password generator</li>
              <li>Credit/Debit card support</li>
              <li>Notes field</li>
              <li>OTP QR codes</li>
              <li>Alternate icons</li>
              <li>CoreData</li>
              <li>100% SwiftUI</li>
              <li>Native support for macOS and iOS.</li>
            </ul>
          ))}

          {this.detailView('Planned Features', (
            <ul className="list-disc list-inside">
              <li>Better password bulk deleting</li>
              <li>Menubar access</li>
              <li>Dropbox, Google Drive, personal server support</li>
              <li>OTP Autofill</li>
              <li>Password suggestions (detect if password is secure)</li>
              <li>Compromised/breached password notice</li>
              <li>Chrome & native Windows support</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }

  detailView = (title, description) => {
    return (
      <div className="container mx-auto bg-gray-100 p-4 rounded-xl">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default App;
