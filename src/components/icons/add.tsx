import { getThemeColor } from 'src/config';
import { useApi } from 'src/hooks';
import { svgIconFactory } from './icon-factory';

function Add(props: any) {
  const { network } = useApi();

  return (
    <div style={{ color: 'red' }}>
      <svg className={props.className} viewBox="0 0 94 94" version="1.1">
        <title>形状结合</title>
        <g id="多签" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="插件内无账号"
            transform="translate(-753.000000, -330.000000)"
            fill={getThemeColor(network)}
            fillRule="nonzero"
          >
            <path
              d="M800,330 C825.957383,330 847,351.042617 847,377 C847,402.957383 825.957383,424 800,424 C774.042617,424 753,402.957383 753,377 C753,351.042617 774.042617,330 800,330 Z M800.315436,361.543624 C798.57333,361.543624 797.161074,362.95588 797.161074,364.697987 L797.161074,364.697987 L797.160623,374.160624 L787.697986,374.161074 C785.955879,374.161074 784.543623,375.57333 784.543623,377.315436 C784.543623,379.057542 785.955879,380.469799 787.697986,380.469799 L787.697986,380.469799 L797.160623,380.469624 L797.161074,389.932886 C797.161074,391.674992 798.57333,393.087248 800.315436,393.087248 C802.057542,393.087248 803.469799,391.674992 803.469799,389.932886 L803.469799,389.932886 L803.469623,380.469624 L812.932886,380.469799 C814.674992,380.469799 816.087248,379.057542 816.087248,377.315436 C816.087248,375.57333 814.674992,374.161074 812.932886,374.161074 L812.932886,374.161074 L803.469623,374.160624 L803.469799,364.697987 C803.469799,362.95588 802.057542,361.543624 800.315436,361.543624 Z"
              id="形状结合"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export const AddIcon = svgIconFactory(Add);
