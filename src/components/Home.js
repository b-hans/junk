import  { GASClient } from 'gas-client'

function Home() {

    const { serverFunctions } = new GASClient()

    const clickTestHandler = async ( event ) => {
        event.preventDefault();

        console.log ('tester1: ');

        try {
            let r = await serverFunctions
                .openDrive()
                .then ((response) => {
                    console.log (response)
                })
                .catch((err) => {
                    console.log ('error here ' + err)
                });

        } catch {(err) => {console.log ('second error: ' + err)}}

        console.log ('end script');
    }

    return  <>
        <div className='pageContent'>
            <h1>Homepage</h1>

            <h2>New stuff</h2>

            <a href='#' onClick={clickTestHandler} class="btn btn-sm btn-primary">Test</a>
        </div>
    </>
}

export default Home