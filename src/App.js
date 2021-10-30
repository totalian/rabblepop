import ActionList from "./comp/ActionList";
import AddOption from "./comp/AddOption";
import Body from "./comp/Body";
import Navbar from "./comp/Navbar";
import PostedDate from "./comp/PostedDate";
import Title from "./comp/Title";
import UserTag from "./comp/UserTag";
import profile from './profile.jpg'

function App() {

  const actionList = [
    {
      text:"Do this",
      user:"Zeki",
      image:profile,
    },
    {
      text:"Do that",
      user:"Mazin",
      image:profile,
    },
    {
      text:"Another thing",
      user:"Eren",
      image:profile,
    }
  ]

  return (
    <div className="App">
      <Navbar />

      <div className="xl:w-2/6 lg:w-3/6 w-full mx-auto h-full min-h-screen bg-gray-100 flex flex-col gap-4 px-8 pt-8 ">

        <div className="w-full flex items-center justify-between">
          <UserTag userName="Zeki Mirza" img={profile} />
          <PostedDate date="21st March 2021" />
        </div>

        <Title 
        text="[WP] The Chosen One is dead, killed while facing the Dark Lord. Grief and hatred together give rise to an unlikely pair of heroes who come together to defeat the evil now taking over the world unchecked. The Chosen One's parents are out for revenge, and there is no room for mercy anymore." 
        />

        <Body
        text={`
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Facilisis magna etiam tempor orci eu. Sit amet purus gravida quis blandit turpis cursus. Erat nam at lectus urna duis convallis convallis tellus id. Nunc aliquet bibendum enim facilisis gravida neque convallis. Id porta nibh venenatis cras sed. Massa vitae tortor condimentum lacinia. Hac habitasse platea dictumst quisque sagittis purus. Dapibus ultrices in iaculis nunc sed augue lacus. Neque sodales ut etiam sit amet nisl. At tempor commodo ullamcorper a lacus vestibulum. Facilisis mauris sit amet massa vitae tortor. Volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut. Eget sit amet tellus cras adipiscing enim eu turpis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Vivamus arcu felis bibendum ut.\nSit amet facilisis magna etiam tempor. Id ornare arcu odio ut sem nulla pharetra diam. Volutpat lacus laoreet non curabitur. Facilisi etiam dignissim diam quis enim lobortis. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis auctor elit sed vulputate mi sit amet mauris commodo. Id eu nisl nunc mi ipsum faucibus. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet dictum sit amet justo donec enim diam. Et leo duis ut diam quam nulla porttitor massa.\nPharetra et ultrices neque ornare aenean euismod elementum. Morbi non arcu risus quis varius quam. Cursus turpis massa tincidunt dui ut. Tempor orci dapibus ultrices in iaculis. Nunc sed augue lacus viverra vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Scelerisque in dictum non consectetur a erat. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Laoreet sit amet cursus sit amet dictum. Sagittis orci a scelerisque purus.`}
        />

        <ActionList actions={actionList}
        />

        <AddOption />

      </div>

    </div>
  );
}

export default App;