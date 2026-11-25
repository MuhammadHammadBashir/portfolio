import {
  BrainIcon,
  EyeIcon,
  FlowArrowIcon,
  RocketIcon,
  SoccerBallIcon,
  SparkleIcon,
  type Icon,
} from '@phosphor-icons/react';

/** Maps the icon keys used in src/data/portfolio.ts to Phosphor icons. */
export const EXPERTISE_ICONS: Record<string, Icon> = {
  eye: EyeIcon,
  sports: SoccerBallIcon,
  sparkle: SparkleIcon,
  brain: BrainIcon,
  flow: FlowArrowIcon,
  rocket: RocketIcon,
};
