/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import BlogCard from '../blogcard';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { array } from 'prop-types';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import BlockHead from '../../templates/BlockHead';
import { grey } from '@material-ui/core/colors';
import Utils from '../../utils';
import { Box, Container, SvgIcon } from '@material-ui/core';

const carousels = {
  breakPoints: [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
  ],
};

const Carous = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '440px',
    },
    Icon: {
      root: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
      },
    },
  }));

  const classes = useStyles();
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <g transform="translate(1.799 15.477)" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M78.462-3.042l-6.957-8.7c-1.521-1.521-3.062-1.739-5.217-1.739H59.332c-2.244,0-5.217,1.234-5.217,3.478V9.132H3.68A3.137,3.137,0,0,0,.2,12.61v3.478A10.309,10.309,0,0,0,8.9,26.523c3.892.52,6.591-.664,8.7-3.478,2.333,3.132,7.749,4.619,12.174,3.478,3.195-.824,4.165-3.838,5.217-6.957.621-1.876,2.069-3.544,1.739-5.217h20.87a9.47,9.47,0,0,0,0,5.217c1.065,3.182,3.7,6.17,6.957,6.957,6.694,1.623,12.174-4.007,12.174-10.435a7.975,7.975,0,0,0,0-1.739h1.739A1.574,1.574,0,0,0,80.2,12.61V2.175C80.2.007,79.984-1.521,78.462-3.042ZM10.636,21.306c-2.231,0-5.217-2.986-5.217-5.217S8.4,12.61,10.636,12.61a3.148,3.148,0,0,1,3.478,3.478C14.114,18.32,12.867,21.306,10.636,21.306Zm15.652,0c-2.231,0-3.478-2.986-3.478-5.217a3.148,3.148,0,0,1,3.478-3.478,3.148,3.148,0,0,1,3.478,3.478C29.767,18.32,28.52,21.306,26.288,21.306Zm40,0c-2.231,0-3.478-2.986-3.478-5.217a3.148,3.148,0,0,1,3.478-3.478c2.231,0,5.217,1.247,5.217,3.478S68.52,21.306,66.288,21.306ZM61.071-1.3V-8.26h5.217c.533,0-.38,1.359,0,1.739L73.245-1.3Z"
            stroke="none"
          />
          <path
            d="M 59.33174133300781 -13.47699737548828 C 57.08766937255859 -13.47699737548828 54.11435317993164 -12.2426929473877 54.11435317993164 -9.998727798461914 L 54.11435317993164 9.131708145141602 L 3.679573059082031 9.131708145141602 C 1.435493469238281 9.131708145141602 0.2013015747070313 10.36601448059082 0.2013015747070313 12.60996627807617 L 0.2013015747070313 16.08822631835938 C 0.2013015747070313 21.26091957092285 3.7750244140625 25.83833122253418 8.896949768066406 26.52300262451172 C 9.492767333984375 26.60256576538086 10.0606689453125 26.6422233581543 10.60269927978516 26.6422233581543 C 13.60160064697266 26.6422233581543 15.81022644042969 25.42849540710449 17.59260940551758 23.04474258422852 C 19.39664840698242 25.46642112731934 23.04514694213867 26.90519905090332 26.65256500244141 26.90519905090332 C 27.71001815795898 26.90519905090332 28.76353073120117 26.78166007995605 29.76652908325195 26.52300262451172 C 32.96148300170898 25.69891929626465 33.93163299560547 22.68540191650391 34.98391723632813 19.56648445129395 C 35.60506820678711 17.69013214111328 37.05263519287109 16.02264976501465 36.72304534912109 14.34909629821777 L 57.59261322021484 14.34909629821777 C 57.25027084350586 16.02264976501465 56.95869445800781 17.69013214111328 57.59261322021484 19.56648445129395 C 58.65764617919922 22.74880218505859 61.29091644287109 25.73693084716797 64.54912567138672 26.52300262451172 C 65.33932495117188 26.71455955505371 66.11338043212891 26.80512428283691 66.86271667480469 26.80512428283691 C 72.46144104003906 26.80512428283691 76.72304534912109 21.75735855102539 76.72304534912109 16.08822631835938 C 76.72304534912109 15.39091968536377 76.84980773925781 15.00839042663574 76.72304534912109 14.34909629821777 L 78.46217346191406 14.34909629821777 C 79.57785797119141 14.34909629821777 80.20130920410156 13.72574329376221 80.20130920410156 12.60996627807617 L 80.20130920410156 2.175178527832031 C 80.20130920410156 0.007248878479003906 79.98355102539063 -1.520820617675781 78.46217346191406 -3.042209625244141 L 71.50564575195313 -11.73785591125488 C 69.98426818847656 -13.25925636291504 68.44355010986328 -13.47699737548828 66.28826141357422 -13.47699737548828 L 59.33174133300781 -13.47699737548828 M 73.24477386474609 -1.303080558776855 L 61.07086944580078 -1.303080558776855 L 61.07086944580078 -8.259597778320313 L 66.28826141357422 -8.259597778320313 C 66.82076263427734 -8.259597778320313 65.90791320800781 -6.900821685791016 66.28826141357422 -6.520467758178711 L 73.24477386474609 -1.303080558776855 M 10.63609313964844 21.30561447143555 C 8.404762268066406 21.30561447143555 5.418708801269531 18.31954383850098 5.418708801269531 16.08822631835938 C 5.418708801269531 13.85689640045166 8.404762268066406 12.60996627807617 10.63609313964844 12.60996627807617 C 12.86740875244141 12.60996627807617 14.11434936523438 13.85689640045166 14.11434936523438 16.08822631835938 C 14.11434936523438 18.31954383850098 12.86740875244141 21.30561447143555 10.63609313964844 21.30561447143555 M 26.28826904296875 21.30561447143555 C 24.05694198608398 21.30561447143555 22.81000137329102 18.31954383850098 22.81000137329102 16.08822631835938 C 22.81000137329102 13.85689640045166 24.05694198608398 12.60996627807617 26.28826904296875 12.60996627807617 C 28.51958847045898 12.60996627807617 29.76652908325195 13.85689640045166 29.76652908325195 16.08822631835938 C 29.76652908325195 18.31954383850098 28.51958847045898 21.30561447143555 26.28826904296875 21.30561447143555 M 66.28826141357422 21.30561447143555 C 64.05693817138672 21.30561447143555 62.80999755859375 18.31954383850098 62.80999755859375 16.08822631835938 C 62.80999755859375 13.85689640045166 64.05693817138672 12.60996627807617 66.28826141357422 12.60996627807617 C 68.51958465576172 12.60996627807617 71.50564575195313 13.85689640045166 71.50564575195313 16.08822631835938 C 71.50564575195313 18.31954383850098 68.51958465576172 21.30561447143555 66.28826141357422 21.30561447143555 M 59.33174133300781 -15.47699737548828 L 66.28826141357422 -15.47699737548828 C 68.4674072265625 -15.47699737548828 70.77448272705078 -15.2974796295166 72.91986846923828 -13.15205764770508 C 72.9720458984375 -13.09988021850586 73.02129364013672 -13.04486846923828 73.06739044189453 -12.98724555969238 L 79.95899200439453 -4.372756958007813 C 82.02633666992188 -2.251136779785156 82.20130920410156 0.02436733245849609 82.20130920410156 2.175178527832031 L 82.20130920410156 12.60996627807617 C 82.20130920410156 13.98631954193115 81.63737487792969 14.83913135528564 81.164306640625 15.31219005584717 C 80.72160339355469 15.75488090515137 79.94636535644531 16.27712440490723 78.72065734863281 16.34230613708496 C 78.69145202636719 17.89411163330078 78.39460754394531 19.41612243652344 77.83717346191406 20.87027359008789 C 77.26089477539063 22.37364959716797 76.43488311767578 23.73181343078613 75.38209533691406 24.90706062316895 C 73.13032531738281 27.42076683044434 70.10475158691406 28.80511856079102 66.86271667480469 28.80511856079102 C 65.94122314453125 28.80511856079102 65.00429534912109 28.69126129150391 64.07795715332031 28.46670913696289 C 62.16387176513672 28.00492095947266 60.34107971191406 26.92065048217773 58.80876159667969 25.33162689208984 C 57.41142654418945 23.88258743286133 56.33565521240234 22.11019515991211 55.69753646850586 20.20577621459961 C 55.22581481933594 18.80903625488281 55.16167068481445 17.50582695007324 55.25392150878906 16.34909629821777 L 38.55153274536133 16.34909629821777 C 38.32194519042969 17.15262985229492 37.94816970825195 17.89802169799805 37.59863662719727 18.59503746032715 C 37.31660079956055 19.15743637084961 37.05021286010742 19.68866157531738 36.88258743286133 20.19502639770508 C 36.88138961791992 20.19863700866699 36.88018798828125 20.20224952697754 36.87896347045898 20.20584869384766 L 36.83028030395508 20.3502254486084 C 36.28983306884766 21.95318984985352 35.73098754882813 23.61070823669434 34.83337783813477 25.03130722045898 C 33.69033050537109 26.8403205871582 32.19634246826172 27.96173095703125 30.26604843139648 28.45961380004883 C 29.1195068359375 28.75529479980469 27.90378952026367 28.90520095825195 26.65256500244141 28.90520095825195 C 24.58830642700195 28.90520095825195 22.52184677124023 28.49849700927734 20.67658615112305 27.72904968261719 C 19.54244995117188 27.25613021850586 18.52642822265625 26.65864753723145 17.66145324707031 25.96112060546875 C 15.72058868408203 27.76170349121094 13.39334869384766 28.64222526550293 10.60269165039063 28.64222526550293 C 9.975044250488281 28.64222526550293 9.312080383300781 28.59619140625 8.632225036621094 28.50540161132813 C 5.679855346679688 28.11075592041016 2.997787475585938 26.60101318359375 1.079811096191406 24.2542724609375 C -0.7764205932617188 21.98307228088379 -1.798698425292969 19.08297920227051 -1.798698425292969 16.08822631835938 L -1.798698425292969 12.60996627807617 C -1.798698425292969 10.53427314758301 -0.9920272827148438 9.291884422302246 -0.3153152465820313 8.615155220031738 C 0.3614120483398438 7.938413619995117 1.603813171386719 7.131708145141602 3.679573059082031 7.131708145141602 L 52.11435317993164 7.131708145141602 L 52.11435317993164 -9.998727798461914 C 52.11435317993164 -11.75311470031738 53.0980110168457 -13.28524589538574 54.88411712646484 -14.31289291381836 C 56.16992950439453 -15.05270385742188 57.79103469848633 -15.47699737548828 59.33174133300781 -15.47699737548828 Z M 64.25112152099609 -6.259597778320313 L 63.07086944580078 -6.259597778320313 L 63.07086944580078 -3.303079605102539 L 67.24477386474609 -3.303079605102539 L 65.0882568359375 -4.920469284057617 C 65.01254272460938 -4.977256774902344 64.94094848632813 -5.039350509643555 64.8740234375 -5.106279373168945 C 64.66712951660156 -5.31318473815918 64.37427520751953 -5.691699981689453 64.25112152099609 -6.259597778320313 Z M 10.63609313964844 19.30561447143555 C 11.25429534912109 19.30561447143555 12.11434936523438 17.6843204498291 12.11434936523438 16.08822631835938 C 12.11434936523438 14.96916675567627 11.75514984130859 14.60996723175049 10.63609313964844 14.60996723175049 C 9.040000915527344 14.60996723175049 7.418708801269531 15.47002601623535 7.418708801269531 16.08822631835938 C 7.418708801269531 16.42791938781738 7.734596252441406 17.24917793273926 8.604873657226563 18.11944961547852 C 9.475128173828125 18.98971939086914 10.29640197753906 19.30561447143555 10.63609313964844 19.30561447143555 Z M 26.28826904296875 19.30561447143555 C 26.90647125244141 19.30561447143555 27.76652908325195 17.6843204498291 27.76652908325195 16.08822631835938 C 27.76652908325195 14.96916675567627 27.40732955932617 14.60996723175049 26.28826904296875 14.60996723175049 C 25.16921234130859 14.60996723175049 24.81000137329102 14.96916675567627 24.81000137329102 16.08822631835938 C 24.81000137329102 17.6843204498291 25.67007064819336 19.30561447143555 26.28826904296875 19.30561447143555 Z M 66.28826141357422 19.30561447143555 C 66.62795257568359 19.30561447143555 67.44921875 18.98971939086914 68.31948089599609 18.11944961547852 C 69.18975067138672 17.24917793273926 69.50564575195313 16.42791938781738 69.50564575195313 16.08822631835938 C 69.50564575195313 15.47002601623535 67.88435363769531 14.60996723175049 66.28826141357422 14.60996723175049 C 65.16919708251953 14.60996723175049 64.80999755859375 14.96916675567627 64.80999755859375 16.08822631835938 C 64.80999755859375 17.6843204498291 65.67005920410156 19.30561447143555 66.28826141357422 19.30561447143555 Z"
            stroke="none"
            fill="#c7c7c7"
          />
        </g>
      </SvgIcon>
    );
  }
  const news = props.props;
  //console.log(news);
  const datas = news.itemcars;
  const cards = [];
  if (datas && datas.length) {
    for (let i = 0; i < datas.length; ++i) {
      const cardd = datas[i];
      cards.push(
        <>
          <BlogCard key={i} props={cardd} />
        </>
      );
    }
  }

  return (
    <>
      <Container fixed>
        <BlockHead heading="Техника в наличии" subheading="на стоянке в Миассе" justifyContent="center">
          <HomeIcon
            className={classes.iconlogo}
            style={{ fontSize: '4rem', marginRight: '2rem', color: grey[300] }}
            viewBox="0 0 80 91.429"
          />
        </BlockHead>
      </Container>
      <Carousel
        itemPadding={[26, 4]}
        css={{ margin: 'auto', minHeight: 'initial' }}
        breakPoints={carousels.breakPoints}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <Box direction="row">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return <DotIndicator key={page} onClick={() => onClick(page)} active={isActivePage} />;
              })}
            </Box>
          );
        }}
      >
        {cards}
      </Carousel>
    </>
  );
};

Carous.propTypes = {};

export default Carous;
