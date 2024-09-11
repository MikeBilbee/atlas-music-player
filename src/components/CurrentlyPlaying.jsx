// CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = ({ song }) => {
	return (
		<div className=" sm:h-200 md:h-[620px] lg:h-[620px] bg-light-primary dark:bg-dark-primary p-6 rounded-lg shadow-md border-gray-300 flex flex-col justify-between items-center"> 
			<CoverArt imageUrl={null} />
			<div className="flex-grow mt-4 text-left w-10/12">
				<SongTitle title={song.title} artist={song.artist} />
			</div>
			<div className="flex-grow w-full px-10">
				<PlayControls  />
			</div>
			<div className=" flex-grow  mt-4 flex items-center">
				<VolumeControl value={50} onChange={() => {}} />
			</div>
		</div>
	);
};

export default CurrentlyPlaying;