const musicData = [
{ id: "high hat", letter: "Q", keyCode: 81, src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
{ id: "dry cymbal hit", letter: "W", keyCode: 87, src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
{ id: "closed high hat", letter: "E", keyCode: 69, src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
{ id: "snare", letter: "A", keyCode: 65, src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
{ id: "side stick", letter: "S", keyCode: 83, src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
{ id: "punchy kick", letter: "D", keyCode: 68, src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
{ id: "heater 1", letter: "Z", keyCode: 90, src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
{ id: "heater 2", letter: "X", keyCode: 88, src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
{ id: "heater 3", letter: "C", keyCode: 67, src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }];


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRefB = React.createRef();
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode == this.props.keyCode) {
      this.myRefB.current.click();
      this.myRefB.current.focus();
    }
  }

  playAudio() {
    let audio = this.myRef.current;
    audio.play();
    document.querySelector("#display").innerHTML = this.props.id;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnMount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      React.createElement("button", { className: "drum-pad", id: this.props.id, onClick: this.playAudio, ref: this.myRefB },
      React.createElement("p", null, this.props.letter),
      React.createElement("audio", { className: "clip", id: this.props.letter, src: this.props.src, ref: this.myRef })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Drum Machine"),
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "drum-pads" },
      musicData.map((dp) =>
      React.createElement(DrumPad, { id: dp.id, letter: dp.letter, src: dp.src, keyCode: dp.keyCode }))),


      React.createElement("div", { id: "display" }))));



  }}


ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));