import * as React from 'react';
import Image from 'next/image'
import Head from 'next/head'

class App extends React.Component {

    render() {
        return (
            <div className="p-10 space-y-10 container">
                <Head>
                    <title>OpenSesame – Privacy</title>
                    <meta name="description" content="Native and encrypted password manager for iOS and macOS." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header className="App-header container mx-auto">
                    <h1 className="text-4xl font-bold">Privacy</h1>
                </header>
                <p>OpenSesmae does NOT collect any information. Everything is completely on-device and secure entries are encrypted using the user's master password.</p>
                <p>The app may sync via iCloud securily and via Apple's native APIs.</p>
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
