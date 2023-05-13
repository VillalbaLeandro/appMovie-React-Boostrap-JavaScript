import '../App.css';
import "./Sidebar"
import Sidebar from './Sidebar';
import ContentWrapper from './ContentWrapper';

function App() {
  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <Sidebar />

      {/* <!-- End of Sidebar --> */}
      {/* <!-- Content Wrapper --> */}
      <ContentWrapper />
      {/* <!-- End of Content Wrapper --> */}

    </div>
  );
}

export default App;
