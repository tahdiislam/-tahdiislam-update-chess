'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _material = require('@mui/material');

var _Close = require('@mui/icons-material/Close');

var _Close2 = _interopRequireDefault(_Close);

var _watchDialogSlice = require('../../features/dialog/watchDialogSlice');

var watchDialog = _interopRequireWildcard(_watchDialogSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var data = [{
  image: 'https://i3.ytimg.com/vi/BERdCPvMqQI/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=BERdCPvMqQI',
  title: "How to Win Material in Chess | Chess Fundamentals | FM Elliott Liu",
  description: "In this thirteenth video, FM Elliott Liu will evaluate different scenarios where capturing of opponent's pieces lead to a better position. You will also learn what needs to be considered by capturing an opponent's piece to achieve a better position.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/0S4dHGoEB20/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=0S4dHGoEB20',
  title: "Do We Really Need to Control the Center in Chess?",
  description: "Join GM Ashley in today's video to study some modern openings, and see some positions where it's worth to give away the center to get a strong attack!",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/t81S1wLUOcU/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=t81S1wLUOcU',
  title: "Space Advantage | Chess Middlegames",
  description: "Having a space advantage gives your pieces more room to maneuver and restricts your opponent’s pieces at the same time.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/eT_rMnvIfto/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=eT_rMnvIfto',
  title: "Chess Lesson # 41: Doubled Pawns | Improve Your Technique and Positional Play",
  description: "Double pawns are considered to be a liability in most cases. However, they might be beneficial as well. In this class, you will learn what doubled pawns are, when they represent a weakness, and also what benefits they can offer.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/e5Ve7a8JkcQ/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=e5Ve7a8JkcQ',
  title: "Chess Ideas You Must Know: Backward Pawns",
  description: "FM Peter Giannatos describes backward pawns using two games. The classic game Rubenstein - Salwe and one of his own games Mahan - Giannatos. Enjoy!",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/mgAbXPBeVEI/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=mgAbXPBeVEI',
  title: "The Fork | Tactics | ChessKid",
  description: "Are you ready for some forks? FM Mike Klein shows you this exciting chess move that allows you to attack two pieces at the same time. If you can master this important idea, you can turn your knights into nightmares - for your opponent.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/6q4aaf1Hsrg/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=6q4aaf1Hsrg',
  title: "Chess Tactics: 5 Pins You Must Know!",
  description: "What are the five pins you absolutely need to know before you play your next game? With examples appropriate for all skill levels, IM  Daniel Rensch shows you the different types of pins and how to use them to win.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/ni8UxqjSRPM/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=ni8UxqjSRPM',
  title: "Chess Lesson # 39: Passed Pawns | Chess Endgames",
  description: "Pawns are the soul of Chess. I started our lessons with this famous quote from Francois-Andre Danican Philidor because it highlights the importance of pawns in this game. When we are  beginners we do not appreciate how important pawns are.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/7_Qoh8B4b6A/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=7_Qoh8B4b6A',
  title: "Power of the Bishop Pair | Chess Middlegames",
  description: "The Bishop Pair is considered to be a big advantage. It is more effective and more destructive than any other combination of minor pieces!",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/jEehFvnO3ZA/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=jEehFvnO3ZA',
  title: "Weak Squares and Outposts | Chess Middlegames",
  description: "Identifying and utilizing weak squares in your opponent’s position and safeguarding the weak squares and potential outposts in your own is crucial for winning in chess.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/ykd0Z3IPOXg/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=ykd0Z3IPOXg',
  title: "Chess Tactics Simplified by GM Susan Polgar [Master Method]",
  description: "We all know the importance of chess tactics and there are few better feelings than spotting an awesome sacrifice and getting to play it in an important game.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/I3CC4vfZWQk/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=I3CC4vfZWQk',
  title: "Judit Polgar's Secrets of the Sicilian (Webinar Replay)",
  description: "In case you missed it, Secrets of the Sicilian is Judit’s first ever video chess course in which she analyzes the most instructive, fascinating and difficult games from her career against players like Kasparov, Ivanchuk, Anand and Topalov.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/H3WtfkUy_ww/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=H3WtfkUy_ww',
  title: "Learn How to Play The Most Creative Chess Game!",
  description: "In this preview of her 3 1/2 hour DVD course on imbalances, FM Alisa Melekhina demonstrates 2 of her games where a minor piece was exchanged for a couple of pawns and positional compensation.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/4bL3cGSZHO4/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=4bL3cGSZHO4',
  title: "How to Pressure Your Opponent Like a Grandmaster?",
  description: "What you experience is tremendous pressure coming from all the different directions, completely paralyzing your plans, ideas, and thinking... You know that knight needs to go to the center and the king should castle to safety ASAP.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/mNqXjfR52UM/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=mNqXjfR52UM',
  title: "Why Castle? and What is Artificial Castling?",
  description: "GM Simon Williams talks about why it is important to castle, what artificial castling is, and when it makes sense to do it. This is a very important move that can help you protect your king and get your rook into play quickly.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/Rda4B5DoEQY/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=Rda4B5DoEQY',
  title: "Svitlana's Smart Moves - Finding pawn weaknesses",
  description: "There are a couple of different pawn weaknesses in chess. Often, spotting those weaknesses is the most common technique, used by professional chess players, to gain an advantage.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/G3QU9-UOxVo/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=G3QU9-UOxVo',
  title: "Pavana alla Venetiana | Joan Ambrosio Dalza fl. 1508",
  description: "Quiet Reflections - No:2 of Series 2. Pavana alla Venetiana by Joan Ambrosio Dalza fl. 1508. Performed by Elizabeth Pallett. Filmed in Great Malvern Priory.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/h0oUO5m3peM/sddefault.jpg',
  href: 'https://www.youtube.com/watch?v=h0oUO5m3peM',
  title: "Calata ala Spagnola | Joan Ambrosio Dalza fl. 1508.",
  description: "Quiet Reflections - No:1 of Series 2. Calata ala Spagnola by Joan Ambrosio Dalza fl. 1508. Performed by Elizabeth Pallett. Filmed in Great Malvern Priory.",
  source: 'YouTube'
}, {
  image: 'https://i3.ytimg.com/vi/4nY-z0hXuq4/maxresdefault.jpg',
  href: 'https://www.youtube.com/watch?v=4nY-z0hXuq4',
  title: "Sellinger's Round | Anonymous (c.1620)",
  description: "Sellinger's Round is a 16th century tune and round dance of unknown authorship, which had immense popularity in the 16th and 17th centuries.",
  source: 'YouTube'
}];

var videos = function videos(data) {
  ;
  var sort = data.sort(function () {
    return Math.random() - 0.5;
  });
  return Object.keys(sort).map(function (key) {
    return React.createElement(
      _material.Grid,
      { key: key, p: 1, item: true, xs: 12, md: 4 },
      React.createElement(
        _material.Card,
        null,
        React.createElement(
          _material.CardActionArea,
          { href: sort[key].href, target: '_blank' },
          React.createElement(_material.CardMedia, {
            component: 'img',
            image: sort[key].image,
            alt: sort[key].title
          }),
          React.createElement(
            _material.CardContent,
            null,
            React.createElement(
              _material.Typography,
              { gutterBottom: true, variant: 'h6', component: 'div' },
              sort[key].title
            ),
            React.createElement(
              _material.Typography,
              { variant: 'body2', color: 'text.secondary' },
              sort[key].description
            )
          ),
          React.createElement(
            _material.CardActions,
            null,
            React.createElement(
              _material.Button,
              { size: 'small' },
              'Watch on ',
              sort[key].source
            )
          )
        )
      )
    );
  });
};

var Transition = React.forwardRef(function Transition(props, ref) {
  return React.createElement(_material.Slide, _extends({ direction: 'up', ref: ref }, props));
});

var WatchDialog = function WatchDialog() {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  return React.createElement(
    _material.Dialog,
    {
      fullScreen: true,
      open: state.watchDialog.open,
      onClose: function onClose() {
        return dispatch(watchDialog.close());
      },
      TransitionComponent: Transition
    },
    React.createElement(
      _material.AppBar,
      { sx: { position: 'relative' } },
      React.createElement(
        _material.Toolbar,
        null,
        React.createElement(
          _material.IconButton,
          {
            edge: 'start',
            color: 'inherit',
            onClick: function onClick() {
              return dispatch(watchDialog.close());
            },
            'aria-label': 'close'
          },
          React.createElement(_Close2.default, null)
        ),
        React.createElement(
          _material.Typography,
          { sx: { ml: 2, flex: 1 }, variant: 'h6', component: 'div' },
          'Watch'
        ),
        React.createElement(
          _material.Button,
          { autoFocus: true, color: 'inherit', onClick: function onClick() {
              return dispatch(watchDialog.close());
            } },
          'Close'
        )
      )
    ),
    React.createElement(
      _material.Grid,
      { container: true, className: 'watch-videos' },
      videos(data)
    )
  );
};

exports.default = WatchDialog;