import { Composition } from "remotion";
import { TrainerPromo } from "./TrainerPromo";
import { SovietEngineerPreview } from "./SovietEngineerPreview";
import { KerriganPreview } from "./KerriganPreview";
import { SopranosPreview } from "./SopranosPreview";
import { GladosPreview } from "./GladosPreview";
import { SheogorathPreview } from "./SheogorathPreview";
import { AxePreview } from "./AxePreview";
import { BattlecruiserPreview } from "./BattlecruiserPreview";
import { DukeNukemPreview } from "./DukeNukemPreview";
import { KirovPreview } from "./KirovPreview";
import { HelldiversPreview } from "./HelldiversPreview";
import { PeonPreview } from "./PeonPreview";
import { Tf2EngineerPreview } from "./Tf2EngineerPreview";
import { MolagBalPreview } from "./MolagBalPreview";
import { RickPreview } from "./RickPreview";
import { MurlocPreview } from "./MurlocPreview";
import { OcarinaPreview } from "./OcarinaPreview";
import { AoE2Preview } from "./AoE2Preview";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TrainerPromo"
        component={TrainerPromo}
        durationInFrames={1400}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="SovietEngineerPreview"
        component={SovietEngineerPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="KerriganPreview"
        component={KerriganPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="SopranosPreview"
        component={SopranosPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="GladosPreview"
        component={GladosPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="SheogorathPreview"
        component={SheogorathPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="AxePreview"
        component={AxePreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="BattlecruiserPreview"
        component={BattlecruiserPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="DukeNukemPreview"
        component={DukeNukemPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="KirovPreview"
        component={KirovPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="HelldiversPreview"
        component={HelldiversPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="PeonPreview"
        component={PeonPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Tf2EngineerPreview"
        component={Tf2EngineerPreview}
        durationInFrames={960}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MolagBalPreview"
        component={MolagBalPreview}
        durationInFrames={1190}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="RickPreview"
        component={RickPreview}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MurlocPreview"
        component={MurlocPreview}
        durationInFrames={910}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="OcarinaPreview"
        component={OcarinaPreview}
        durationInFrames={940}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="AoE2Preview"
        component={AoE2Preview}
        durationInFrames={860}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
