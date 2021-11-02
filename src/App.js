import ActionList from "./comp/ActionList";
import AddOption from "./comp/AddOption";
import Body from "./comp/Body";
import Navbar from "./comp/Navbar";
import PostedDate from "./comp/PostedDate";
import Title from "./comp/Title";
import UserTag from "./comp/UserTag";
import profile from './profile.jpg'
import { useState, useEffect } from "react";
import db from "./firebase/config";
import { collection, getDoc, doc, getDocs, addDoc, setDoc } from "firebase/firestore"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  const [pageId, setPageId] = useState("L4Aoe0aPLKtvHPICd9YD")

  const [pageDetails, setPageDetails] = useState(
    {
      user: "Zeki Mirza",
      createdAt: "21st March 2021",
      title: "[WP] The Chosen One is dead, killed while facing the Dark Lord. Grief and hatred together give rise to an unlikely pair of heroes who come together to defeat the evil now taking over the world unchecked. The Chosen One's parents are out for revenge, and there is no room for mercy anymore.",
      body: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Facilisis magna etiam tempor orci eu. Sit amet purus gravida quis blandit turpis cursus. Erat nam at lectus urna duis convallis convallis tellus id. Nunc aliquet bibendum enim facilisis gravida neque convallis. Id porta nibh venenatis cras sed. Massa vitae tortor condimentum lacinia. Hac habitasse platea dictumst quisque sagittis purus. Dapibus ultrices in iaculis nunc sed augue lacus. Neque sodales ut etiam sit amet nisl. At tempor commodo ullamcorper a lacus vestibulum. Facilisis mauris sit amet massa vitae tortor. Volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut. Eget sit amet tellus cras adipiscing enim eu turpis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Vivamus arcu felis bibendum ut.\nSit amet facilisis magna etiam tempor. Id ornare arcu odio ut sem nulla pharetra diam. Volutpat lacus laoreet non curabitur. Facilisi etiam dignissim diam quis enim lobortis. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis auctor elit sed vulputate mi sit amet mauris commodo. Id eu nisl nunc mi ipsum faucibus. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet dictum sit amet justo donec enim diam. Et leo duis ut diam quam nulla porttitor massa.\nPharetra et ultrices neque ornare aenean euismod elementum. Morbi non arcu risus quis varius quam. Cursus turpis massa tincidunt dui ut. Tempor orci dapibus ultrices in iaculis. Nunc sed augue lacus viverra vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Scelerisque in dictum non consectetur a erat. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Laoreet sit amet cursus sit amet dictum. Sagittis orci a scelerisque purus.`
    }
  )
  const [actionList, setActionList] = useState([
    {
      text: "Do this",
      user: "Zeki",
      image: profile,
    },
    {
      text: "Do that",
      user: "Mazin",
      image: profile,
    },
    {
      text: "Another thing",
      user: "Eren",
      image: profile,
    }
  ])

  const [showAddOptions, setShowAddOptions] = useState(false)

  const fetchPage = async (id) => {
    const docRef = doc(db, "pages", id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  const fetchActions = async (id) => {
    const actionList = []
    const actionRef = collection(db, "pages", id, "actions")
    const actions = await getDocs(actionRef)
    actions.forEach(doc => actionList.push(doc.data()))
    return actionList
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      const data = await fetchPage(pageId)
      if(data){setPageDetails(data)} else {
        setError(true)
      }

      const actionList = await fetchActions(pageId)
      setActionList(actionList)
      setLoading(false)
    })().catch(() => setPageId("L4Aoe0aPLKtvHPICd9YD"))
  }, [pageId])

  const addOption = ({ text, user = "Zeki Mirza", image = profile, body }) => {
    (async () => {
      const currentPageActionsRef = collection(db, "pages", pageId, "actions")
      const pagesRef = collection(db, "pages")

      // add action to current page
      const newActionDoc = await addDoc(currentPageActionsRef, { text, user, image })
      const newActionId = newActionDoc.id

      // create page with data from new body
      const newPageDoc = await addDoc(pagesRef, {
        title: text,
        user,
        body,
        previousPage:pageId,
        sourceAction:newActionId
      })
      const newPageId = newPageDoc.id

      // add source and destination to action
      const newActionRef = doc(db, "pages", pageId, "actions", newActionId)
      await setDoc(newActionRef, { source: pageId, destination: newPageId }, { merge: true })

      setActionList([{ text, user, image, source: pageId, destination: newPageId }, ...actionList])
    })()
  }

  const selectAction = newPageId => setPageId(newPageId)

  // handle going directly to a URL
  const currentPageUrl = window.location.href.split("/")
  const currentPageId = currentPageUrl[currentPageUrl.length - 1]
  useEffect(() => {
    setPageId(currentPageId)
  },[currentPageId])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={`/`}>
            <div className="xl:w-2/6 lg:w-3/6 w-full mx-auto h-full min-h-screen bg-gray-100 flex flex-col gap-4 px-8 pt-8 ">

              <div className="w-full flex items-center justify-between">
                <UserTag userName={pageDetails.user} img={profile} />
                <PostedDate date={pageDetails.date} />
              </div>

              <Title
                text={loading || error ? "Loading" : pageDetails.title}
              />

              <Body
                text={loading || error ? "Loading" : pageDetails.body}
              />

              {loading || <ActionList actions={actionList}
                onAddOption={() => setShowAddOptions(true)}
                onSelectAction={selectAction}
              />}

              {showAddOptions && <AddOption
                hideModal={() => setShowAddOptions(false)}

                onAddOption={addOption}
              />}

              {/* Here just because of tailwind purge */}
              <span className="bg-red-800 hidden"></span>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;