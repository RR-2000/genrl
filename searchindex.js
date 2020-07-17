Search.setIndex({docnames:["algorithms/bandits/genrl.classical.bandit","algorithms/bandits/index","algorithms/classical/genrl.classical.qlearning","algorithms/classical/genrl.classical.sarsa","algorithms/classical/index","algorithms/deep/genrl.deep.agents.a2c","algorithms/deep/genrl.deep.agents.ddpg","algorithms/deep/genrl.deep.agents.dqn","algorithms/deep/genrl.deep.agents.ppo1","algorithms/deep/genrl.deep.agents.sac","algorithms/deep/genrl.deep.agents.td3","algorithms/deep/genrl.deep.agents.vpg","algorithms/deep/index","algorithms/index","genrl","genrl.classical","genrl.classical.bandit.contextual_policies","genrl.classical.bandit.policies","genrl.classical.common","genrl.deep","genrl.deep.agents","genrl.deep.common","genrl.environments","genrl.environments.vec_env","getting_started","index","install","modules","tutorials/index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["algorithms/bandits/genrl.classical.bandit.rst","algorithms/bandits/index.rst","algorithms/classical/genrl.classical.qlearning.rst","algorithms/classical/genrl.classical.sarsa.rst","algorithms/classical/index.rst","algorithms/deep/genrl.deep.agents.a2c.rst","algorithms/deep/genrl.deep.agents.ddpg.rst","algorithms/deep/genrl.deep.agents.dqn.rst","algorithms/deep/genrl.deep.agents.ppo1.rst","algorithms/deep/genrl.deep.agents.sac.rst","algorithms/deep/genrl.deep.agents.td3.rst","algorithms/deep/genrl.deep.agents.vpg.rst","algorithms/deep/index.rst","algorithms/index.rst","genrl.rst","genrl.classical.rst","genrl.classical.bandit.contextual_policies.rst","genrl.classical.bandit.policies.rst","genrl.classical.common.rst","genrl.deep.rst","genrl.deep.agents.rst","genrl.deep.common.rst","genrl.environments.rst","genrl.environments.vec_env.rst","getting_started.md","index.rst","install.md","modules.rst","tutorials/index.rst"],objects:{"":{genrl:[14,0,0,"-"]},"genrl.classical":{bandit:[0,0,0,"-"],common:[18,0,0,"-"],qlearning:[2,0,0,"-"],sarsa:[3,0,0,"-"]},"genrl.classical.bandit":{bandits:[0,0,0,"-"],contextual_bandits:[0,0,0,"-"],contextual_policies:[16,0,0,"-"],policies:[17,0,0,"-"]},"genrl.classical.bandit.bandits":{Bandit:[0,1,1,""],BernoulliBandit:[0,1,1,""],GaussianBandit:[0,1,1,""]},"genrl.classical.bandit.bandits.Bandit":{arms:[0,2,1,""],step:[0,2,1,""]},"genrl.classical.bandit.bandits.BernoulliBandit":{reward_probs:[0,2,1,""],step:[0,2,1,""]},"genrl.classical.bandit.bandits.GaussianBandit":{rewards:[0,2,1,""],step:[0,2,1,""]},"genrl.classical.bandit.contextual_bandits":{BernoulliCB:[0,1,1,""],ContextualBandit:[0,1,1,""],GaussianCB:[0,1,1,""]},"genrl.classical.bandit.contextual_bandits.BernoulliCB":{step:[0,2,1,""]},"genrl.classical.bandit.contextual_bandits.ContextualBandit":{arms:[0,2,1,""],bandits:[0,2,1,""],reset:[0,2,1,""],step:[0,2,1,""]},"genrl.classical.bandit.contextual_bandits.GaussianCB":{step:[0,2,1,""]},"genrl.classical.bandit.contextual_policies":{base:[16,0,0,"-"],bayesian:[16,0,0,"-"],epsgreedy:[16,0,0,"-"],gradient:[16,0,0,"-"],thompson:[16,0,0,"-"],ucb:[16,0,0,"-"]},"genrl.classical.bandit.contextual_policies.base":{CBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.base.CBPolicy":{action_hist:[16,2,1,""],counts:[16,2,1,""],learn:[16,2,1,""],regret:[16,2,1,""],regret_hist:[16,2,1,""],reward_hist:[16,2,1,""],select_action:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.contextual_policies.bayesian":{BayesianUCBCBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.bayesian.BayesianUCBCBPolicy":{a:[16,2,1,""],b:[16,2,1,""],confidence:[16,2,1,""],quality:[16,2,1,""],select_action:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.contextual_policies.epsgreedy":{EpsGreedyCBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.epsgreedy.EpsGreedyCBPolicy":{eps:[16,2,1,""],quality:[16,2,1,""],select_action:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.contextual_policies.gradient":{GradientCBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.gradient.GradientCBPolicy":{alpha:[16,2,1,""],probability_hist:[16,2,1,""],quality:[16,2,1,""],select_action:[16,2,1,""],temp:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.contextual_policies.thompson":{ThompsonSamplingCBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.thompson.ThompsonSamplingCBPolicy":{a:[16,2,1,""],b:[16,2,1,""],quality:[16,2,1,""],select_action:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.contextual_policies.ucb":{UCBCBPolicy:[16,1,1,""]},"genrl.classical.bandit.contextual_policies.ucb.UCBCBPolicy":{confidence:[16,2,1,""],quality:[16,2,1,""],select_action:[16,2,1,""],update_params:[16,2,1,""]},"genrl.classical.bandit.policies":{base:[17,0,0,"-"],bayesian:[17,0,0,"-"],epsgreedy:[17,0,0,"-"],gradient:[17,0,0,"-"],thompson:[17,0,0,"-"],ucb:[17,0,0,"-"]},"genrl.classical.bandit.policies.base":{BanditPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.base.BanditPolicy":{action_hist:[17,2,1,""],counts:[17,2,1,""],learn:[17,2,1,""],regret:[17,2,1,""],regret_hist:[17,2,1,""],reward_hist:[17,2,1,""],select_action:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.bandit.policies.bayesian":{BayesianUCBPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.bayesian.BayesianUCBPolicy":{a:[17,2,1,""],b:[17,2,1,""],confidence:[17,2,1,""],quality:[17,2,1,""],select_action:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.bandit.policies.epsgreedy":{EpsGreedyPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.epsgreedy.EpsGreedyPolicy":{eps:[17,2,1,""],quality:[17,2,1,""],select_action:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.bandit.policies.gradient":{GradientPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.gradient.GradientPolicy":{alpha:[17,2,1,""],probability_hist:[17,2,1,""],quality:[17,2,1,""],select_action:[17,2,1,""],temp:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.bandit.policies.thompson":{ThompsonSamplingPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.thompson.ThompsonSamplingPolicy":{a:[17,2,1,""],b:[17,2,1,""],quality:[17,2,1,""],select_action:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.bandit.policies.ucb":{UCBPolicy:[17,1,1,""]},"genrl.classical.bandit.policies.ucb.UCBPolicy":{confidence:[17,2,1,""],quality:[17,2,1,""],select_action:[17,2,1,""],update_params:[17,2,1,""]},"genrl.classical.common":{models:[18,0,0,"-"],trainer:[18,0,0,"-"],values:[18,0,0,"-"]},"genrl.classical.common.models":{TabularModel:[18,1,1,""],get_model_from_name:[18,3,1,""]},"genrl.classical.common.models.TabularModel":{add:[18,2,1,""],is_empty:[18,2,1,""],sample:[18,2,1,""],step:[18,2,1,""]},"genrl.classical.common.trainer":{Trainer:[18,1,1,""]},"genrl.classical.common.trainer.Trainer":{evaluate:[18,2,1,""],learn:[18,2,1,""],plan:[18,2,1,""],plot:[18,2,1,""],train:[18,2,1,""]},"genrl.classical.common.values":{BaseValue:[18,1,1,""],get_value_from_name:[18,3,1,""]},"genrl.classical.common.values.BaseValue":{update:[18,2,1,""]},"genrl.classical.qlearning":{qlearning:[2,0,0,"-"]},"genrl.classical.qlearning.qlearning":{QLearning:[2,1,1,""]},"genrl.classical.qlearning.qlearning.QLearning":{env:[2,4,1,""],epsilon:[2,4,1,""],gamma:[2,4,1,""],get_action:[2,2,1,""],lr:[2,4,1,""],update:[2,2,1,""]},"genrl.classical.sarsa":{sarsa:[3,0,0,"-"]},"genrl.classical.sarsa.sarsa":{SARSA:[3,1,1,""]},"genrl.classical.sarsa.sarsa.SARSA":{get_action:[3,2,1,""],update:[3,2,1,""]},"genrl.deep":{agents:[20,0,0,"-"],common:[21,0,0,"-"]},"genrl.deep.agents":{a2c:[5,0,0,"-"],base:[20,0,0,"-"],ddpg:[6,0,0,"-"],dqn:[7,0,0,"-"],ppo1:[8,0,0,"-"],sac:[9,0,0,"-"],td3:[10,0,0,"-"],vpg:[11,0,0,"-"]},"genrl.deep.agents.a2c":{a2c:[5,0,0,"-"]},"genrl.deep.agents.a2c.a2c":{A2C:[5,1,1,""]},"genrl.deep.agents.a2c.a2c.A2C":{create_model:[5,2,1,""],empty_logs:[5,2,1,""],get_hyperparams:[5,2,1,""],get_logging_params:[5,2,1,""],get_traj_loss:[5,2,1,""],get_value_log_probs:[5,2,1,""],load_weights:[5,2,1,""],select_action:[5,2,1,""],update_policy:[5,2,1,""]},"genrl.deep.agents.base":{BaseAgent:[20,1,1,""],OnPolicyAgent:[20,1,1,""]},"genrl.deep.agents.base.BaseAgent":{create_model:[20,2,1,""],get_hyperparameters:[20,2,1,""],get_loss:[20,2,1,""],select_action:[20,2,1,""],update_params:[20,2,1,""]},"genrl.deep.agents.base.OnPolicyAgent":{collect_rewards:[20,2,1,""],collect_rollouts:[20,2,1,""]},"genrl.deep.agents.ddpg":{ddpg:[6,0,0,"-"]},"genrl.deep.agents.ddpg.ddpg":{DDPG:[6,1,1,""]},"genrl.deep.agents.ddpg.ddpg.DDPG":{create_model:[6,2,1,""],empty_logs:[6,2,1,""],get_hyperparams:[6,2,1,""],get_logging_params:[6,2,1,""],get_p_loss:[6,2,1,""],get_q_loss:[6,2,1,""],learn:[6,2,1,""],load_weights:[6,2,1,""],select_action:[6,2,1,""],update_params:[6,2,1,""],update_params_before_select_action:[6,2,1,""]},"genrl.deep.agents.dqn":{dqn:[7,0,0,"-"],utils:[7,0,0,"-"]},"genrl.deep.agents.dqn.dqn":{DQN:[7,1,1,""]},"genrl.deep.agents.dqn.dqn.DQN":{calculate_epsilon_by_frame:[7,2,1,""],create_model:[7,2,1,""],empty_logs:[7,2,1,""],get_hyperparams:[7,2,1,""],get_logging_params:[7,2,1,""],get_td_loss:[7,2,1,""],learn:[7,2,1,""],load_weights:[7,2,1,""],projection_distribution:[7,2,1,""],select_action:[7,2,1,""],update_params:[7,2,1,""],update_params_before_select_action:[7,2,1,""],update_target_model:[7,2,1,""]},"genrl.deep.agents.dqn.utils":{CategoricalDQNValue:[7,1,1,""],CategoricalDQNValueCNN:[7,1,1,""],DuelingDQNValueCNN:[7,1,1,""],DuelingDQNValueMlp:[7,1,1,""],NoisyDQNValue:[7,1,1,""],NoisyDQNValueCNN:[7,1,1,""],NoisyLinear:[7,1,1,""],noisy_mlp:[7,3,1,""]},"genrl.deep.agents.dqn.utils.CategoricalDQNValue":{forward:[7,2,1,""],reset_noise:[7,2,1,""]},"genrl.deep.agents.dqn.utils.CategoricalDQNValueCNN":{forward:[7,2,1,""],reset_noise:[7,2,1,""]},"genrl.deep.agents.dqn.utils.DuelingDQNValueCNN":{forward:[7,2,1,""]},"genrl.deep.agents.dqn.utils.DuelingDQNValueMlp":{forward:[7,2,1,""]},"genrl.deep.agents.dqn.utils.NoisyDQNValue":{forward:[7,2,1,""],reset_noise:[7,2,1,""]},"genrl.deep.agents.dqn.utils.NoisyDQNValueCNN":{forward:[7,2,1,""],reset_noise:[7,2,1,""]},"genrl.deep.agents.dqn.utils.NoisyLinear":{forward:[7,2,1,""],reset_noise:[7,2,1,""],reset_parameters:[7,2,1,""]},"genrl.deep.agents.ppo1":{ppo1:[8,0,0,"-"]},"genrl.deep.agents.ppo1.ppo1":{PPO1:[8,1,1,""]},"genrl.deep.agents.ppo1.ppo1.PPO1":{create_model:[8,2,1,""],empty_logs:[8,2,1,""],evaluate_actions:[8,2,1,""],get_hyperparams:[8,2,1,""],get_logging_params:[8,2,1,""],get_traj_loss:[8,2,1,""],load_weights:[8,2,1,""],select_action:[8,2,1,""],update_policy:[8,2,1,""]},"genrl.deep.agents.sac":{sac:[9,0,0,"-"]},"genrl.deep.agents.sac.sac":{SAC:[9,1,1,""]},"genrl.deep.agents.sac.sac.SAC":{create_model:[9,2,1,""],empty_logs:[9,2,1,""],get_hyperparams:[9,2,1,""],get_logging_params:[9,2,1,""],learn:[9,2,1,""],load_weights:[9,2,1,""],sample_action:[9,2,1,""],select_action:[9,2,1,""],update_params:[9,2,1,""],update_params_before_select_action:[9,2,1,""]},"genrl.deep.agents.td3":{td3:[10,0,0,"-"]},"genrl.deep.agents.td3.td3":{TD3:[10,1,1,""]},"genrl.deep.agents.td3.td3.TD3":{create_model:[10,2,1,""],empty_logs:[10,2,1,""],get_hyperparams:[10,2,1,""],get_logging_params:[10,2,1,""],get_p_loss:[10,2,1,""],get_q_loss:[10,2,1,""],learn:[10,2,1,""],load_weights:[10,2,1,""],select_action:[10,2,1,""],update_params:[10,2,1,""],update_params_before_select_action:[10,2,1,""]},"genrl.deep.agents.vpg":{vpg:[11,0,0,"-"]},"genrl.deep.agents.vpg.vpg":{VPG:[11,1,1,""]},"genrl.deep.agents.vpg.vpg.VPG":{create_model:[11,2,1,""],empty_logs:[11,2,1,""],get_hyperparams:[11,2,1,""],get_logging_params:[11,2,1,""],get_traj_loss:[11,2,1,""],get_value_log_probs:[11,2,1,""],load_weights:[11,2,1,""],select_action:[11,2,1,""],update_policy:[11,2,1,""]},"genrl.deep.common":{actor_critic:[21,0,0,"-"],base:[21,0,0,"-"],buffers:[21,0,0,"-"],logger:[21,0,0,"-"],noise:[21,0,0,"-"],policies:[21,0,0,"-"],rollout_storage:[21,0,0,"-"],trainer:[21,0,0,"-"],utils:[21,0,0,"-"],values:[21,0,0,"-"]},"genrl.deep.common.actor_critic":{CNNActorCritic:[21,1,1,""],MlpActorCritic:[21,1,1,""],get_actor_critic_from_name:[21,3,1,""]},"genrl.deep.common.actor_critic.CNNActorCritic":{get_action:[21,2,1,""],get_value:[21,2,1,""]},"genrl.deep.common.base":{BaseActorCritic:[21,1,1,""],BasePolicy:[21,1,1,""],BaseValue:[21,1,1,""]},"genrl.deep.common.base.BaseActorCritic":{get_action:[21,2,1,""],get_value:[21,2,1,""]},"genrl.deep.common.base.BasePolicy":{forward:[21,2,1,""],get_action:[21,2,1,""]},"genrl.deep.common.base.BaseValue":{forward:[21,2,1,""],get_value:[21,2,1,""]},"genrl.deep.common.buffers":{PrioritizedBuffer:[21,1,1,""],PushReplayBuffer:[21,1,1,""],ReplayBuffer:[21,1,1,""]},"genrl.deep.common.buffers.PrioritizedBuffer":{extend:[21,2,1,""],get_len:[21,2,1,""],pos:[21,2,1,""],push:[21,2,1,""],sample:[21,2,1,""],update_priorities:[21,2,1,""]},"genrl.deep.common.buffers.PushReplayBuffer":{extend:[21,2,1,""],get_len:[21,2,1,""],push:[21,2,1,""],sample:[21,2,1,""]},"genrl.deep.common.buffers.ReplayBuffer":{extend:[21,2,1,""],push:[21,2,1,""],sample:[21,2,1,""]},"genrl.deep.common.logger":{CSVLogger:[21,1,1,""],HumanOutputFormat:[21,1,1,""],Logger:[21,1,1,""],TensorboardLogger:[21,1,1,""],get_logger_by_name:[21,3,1,""]},"genrl.deep.common.logger.CSVLogger":{close:[21,2,1,""],write:[21,2,1,""]},"genrl.deep.common.logger.HumanOutputFormat":{close:[21,2,1,""],max_key_len:[21,2,1,""],round:[21,2,1,""],write:[21,2,1,""],write_to_file:[21,2,1,""]},"genrl.deep.common.logger.Logger":{close:[21,2,1,""],formats:[21,2,1,""],logdir:[21,2,1,""],write:[21,2,1,""]},"genrl.deep.common.logger.TensorboardLogger":{close:[21,2,1,""],write:[21,2,1,""]},"genrl.deep.common.noise":{ActionNoise:[21,1,1,""],NormalActionNoise:[21,1,1,""],OrnsteinUhlenbeckActionNoise:[21,1,1,""]},"genrl.deep.common.noise.ActionNoise":{mean:[21,2,1,""],std:[21,2,1,""]},"genrl.deep.common.noise.NormalActionNoise":{reset:[21,2,1,""]},"genrl.deep.common.noise.OrnsteinUhlenbeckActionNoise":{reset:[21,2,1,""]},"genrl.deep.common.policies":{CNNPolicy:[21,1,1,""],MlpPolicy:[21,1,1,""],get_policy_from_name:[21,3,1,""]},"genrl.deep.common.policies.CNNPolicy":{forward:[21,2,1,""]},"genrl.deep.common.rollout_storage":{BaseBuffer:[21,1,1,""],ReplayBufferSamples:[21,1,1,""],RolloutBuffer:[21,1,1,""],RolloutBufferSamples:[21,1,1,""],RolloutReturn:[21,1,1,""]},"genrl.deep.common.rollout_storage.BaseBuffer":{add:[21,2,1,""],extend:[21,2,1,""],reset:[21,2,1,""],sample:[21,2,1,""],size:[21,2,1,""],swap_and_flatten:[21,2,1,""],to_torch:[21,2,1,""]},"genrl.deep.common.rollout_storage.ReplayBufferSamples":{actions:[21,2,1,""],dones:[21,2,1,""],next_observations:[21,2,1,""],observations:[21,2,1,""],rewards:[21,2,1,""]},"genrl.deep.common.rollout_storage.RolloutBuffer":{add:[21,2,1,""],compute_returns_and_advantage:[21,2,1,""],get:[21,2,1,""],reset:[21,2,1,""]},"genrl.deep.common.rollout_storage.RolloutBufferSamples":{actions:[21,2,1,""],advantages:[21,2,1,""],observations:[21,2,1,""],old_log_prob:[21,2,1,""],old_values:[21,2,1,""],returns:[21,2,1,""]},"genrl.deep.common.rollout_storage.RolloutReturn":{continue_training:[21,2,1,""],episode_reward:[21,2,1,""],episode_timesteps:[21,2,1,""],n_episodes:[21,2,1,""]},"genrl.deep.common.trainer":{OffPolicyTrainer:[21,1,1,""],OnPolicyTrainer:[21,1,1,""],Trainer:[21,1,1,""]},"genrl.deep.common.trainer.OffPolicyTrainer":{train:[21,2,1,""]},"genrl.deep.common.trainer.OnPolicyTrainer":{train:[21,2,1,""]},"genrl.deep.common.trainer.Trainer":{evaluate:[21,2,1,""],load:[21,2,1,""],n_envs:[21,2,1,""],save:[21,2,1,""],train:[21,2,1,""]},"genrl.deep.common.utils":{cnn:[21,3,1,""],get_env_properties:[21,3,1,""],get_model:[21,3,1,""],load_params:[21,3,1,""],mlp:[21,3,1,""],safe_mean:[21,3,1,""],set_seeds:[21,3,1,""]},"genrl.deep.common.values":{CNNValue:[21,1,1,""],MlpValue:[21,1,1,""],get_value_from_name:[21,3,1,""]},"genrl.deep.common.values.CNNValue":{forward:[21,2,1,""]},"genrl.environments":{action_wrappers:[22,0,0,"-"],atari_preprocessing:[22,0,0,"-"],atari_wrappers:[22,0,0,"-"],base_wrapper:[22,0,0,"-"],frame_stack:[22,0,0,"-"],gym_wrapper:[22,0,0,"-"],suite:[22,0,0,"-"],vec_env:[23,0,0,"-"]},"genrl.environments.action_wrappers":{ClipAction:[22,1,1,""],RescaleAction:[22,1,1,""]},"genrl.environments.action_wrappers.ClipAction":{action:[22,2,1,""]},"genrl.environments.action_wrappers.RescaleAction":{action:[22,2,1,""]},"genrl.environments.atari_preprocessing":{AtariPreprocessing:[22,1,1,""]},"genrl.environments.atari_preprocessing.AtariPreprocessing":{reset:[22,2,1,""],step:[22,2,1,""]},"genrl.environments.atari_wrappers":{FireReset:[22,1,1,""],NoopReset:[22,1,1,""]},"genrl.environments.atari_wrappers.FireReset":{reset:[22,2,1,""]},"genrl.environments.atari_wrappers.NoopReset":{reset:[22,2,1,""],step:[22,2,1,""]},"genrl.environments.base_wrapper":{BaseWrapper:[22,1,1,""]},"genrl.environments.base_wrapper.BaseWrapper":{batch_size:[22,2,1,""],close:[22,2,1,""],render:[22,2,1,""],reset:[22,2,1,""],seed:[22,2,1,""],step:[22,2,1,""]},"genrl.environments.frame_stack":{FrameStack:[22,1,1,""],LazyFrames:[22,1,1,""]},"genrl.environments.frame_stack.FrameStack":{reset:[22,2,1,""],step:[22,2,1,""]},"genrl.environments.frame_stack.LazyFrames":{shape:[22,2,1,""]},"genrl.environments.gym_wrapper":{GymWrapper:[22,1,1,""]},"genrl.environments.gym_wrapper.GymWrapper":{action_shape:[22,2,1,""],close:[22,2,1,""],obs_shape:[22,2,1,""],render:[22,2,1,""],reset:[22,2,1,""],sample:[22,2,1,""],seed:[22,2,1,""],step:[22,2,1,""]},"genrl.environments.suite":{AtariEnv:[22,3,1,""],GymEnv:[22,3,1,""],VectorEnv:[22,3,1,""]},"genrl.environments.vec_env":{utils:[23,0,0,"-"],vector_envs:[23,0,0,"-"]},"genrl.environments.vec_env.utils":{RunningMeanStd:[23,1,1,""]},"genrl.environments.vec_env.utils.RunningMeanStd":{update:[23,2,1,""]},"genrl.environments.vec_env.vector_envs":{SerialVecEnv:[23,1,1,""],SubProcessVecEnv:[23,1,1,""],VecEnv:[23,1,1,""],worker:[23,3,1,""]},"genrl.environments.vec_env.vector_envs.SerialVecEnv":{close:[23,2,1,""],get_spaces:[23,2,1,""],images:[23,2,1,""],render:[23,2,1,""],reset:[23,2,1,""],step:[23,2,1,""]},"genrl.environments.vec_env.vector_envs.SubProcessVecEnv":{close:[23,2,1,""],get_spaces:[23,2,1,""],reset:[23,2,1,""],seed:[23,2,1,""],step:[23,2,1,""]},"genrl.environments.vec_env.vector_envs.VecEnv":{action_shape:[23,2,1,""],action_spaces:[23,2,1,""],close:[23,2,1,""],n_envs:[23,2,1,""],obs_shape:[23,2,1,""],observation_spaces:[23,2,1,""],reset:[23,2,1,""],sample:[23,2,1,""],seed:[23,2,1,""],step:[23,2,1,""]},genrl:{classical:[15,0,0,"-"],deep:[19,0,0,"-"],environments:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"abstract":[22,23],"boolean":[5,10,21,22],"class":[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23,25],"default":[21,22],"float":[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],"function":[5,7,11,18,21,22,23],"import":[5,21,24],"int":[0,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],"new":[8,21,25,26],"return":[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],"static":21,"true":[2,3,5,9,18,21,22,24],"while":[7,16,17],For:7,RMS:23,The:[0,5,6,7,8,9,10,11,16,17,21,22,26],Used:7,_get_loss:20,_io:21,a2c:[12,13,21],a3c:5,a_dim:18,abc:[20,21,22,23],abs:[5,6,7,8,9,10],ac_nam:21,accord:[16,17],action:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],action_dim:[7,18,21],action_hist:[16,17],action_shap:[22,23],action_spac:23,action_wrapp:[14,27],actionnois:21,actionwrapp:22,activ:[21,26],actor:[5,8,9,10,11,21],actor_batch_s:5,actor_batchs:[8,11],actor_crit:[14,19],actual:22,adapt:21,add:[18,21],adding:[16,17],advantag:[5,21],after:[7,21,22,23],afterward:7,agent:[2,12,13,14,18,19,21,22,24],algo:21,algorithm:[2,3,5,6,8,9,11,18,21,25],alia:21,all:[7,8,16,17,20,21,22,23],along:21,alpha:[9,16,17,21],also:[8,20,26],although:7,alwai:[7,22],ani:[5,6,7,8,9,10,11,18,20,21,22],anyth:22,appli:22,approxim:11,arch:24,architectur:21,arg:[21,23],arm:[0,16,17],arr:21,arrai:[10,16,17,18,21,22,23],articl:2,arxiv:[5,6,7,8,9,10],ascent:[16,17],asscoiat:[16,17],assign:[16,17],associ:[16,17],assum:21,atari:[22,24],atari_preprocess:[14,27],atari_wrapp:[14,27],atarienv:22,ataripreprocess:22,ataritimelimit:22,atom:7,averag:[6,9,10,18],avoid:21,axes:21,bandit:[13,25],banditpolici:17,base:[0,2,3,5,6,7,8,9,10,11,14,18,19,22,23],base_wrapp:[14,27],baseactorcrit:21,baseag:20,basebuff:21,basecontext:23,baselin:[21,22,23],basepolici:21,basevalu:[18,21],basewrapp:22,basic:21,batch:[5,6,7,9,10,21,22,23],batch_indic:21,batch_prior:21,batch_siz:[5,6,7,8,9,10,11,20,21,22],bayesianucbcbpolici:16,bayesianucbpolici:17,been:[16,17,18],befor:[6,7,8,9,10,16,17,21,22],being:[9,21],benchmark:25,bernoulli:0,bernoullibandit:0,bernoullicb:0,beta:[16,17,21],between:[6,9,10,16,17,22],bf00992698:2,bia:21,bool:[2,3,5,6,7,9,10,11,17,18,21,22],bound:[16,17],breakout:24,buffer:[5,6,7,8,9,11,14,19,20],buffer_s:21,calcul:[5,7,11,20,23],calculate_epsilon_by_fram:7,call:[7,20,21],can:[22,23,26],cannot:21,capac:21,care:7,cartpol:24,categor:7,categori:0,categorical_dqn:7,categoricaldqnvalu:7,categoricaldqnvaluecnn:7,cbpolici:16,chang:21,channel:21,check:18,checkpoint:21,child:23,child_conn:23,choos:[16,17,22],chosen:[9,22],citeseerx:3,classic:[1,13,14,21,25,27],cleanup:22,clip:[8,22],clip_param:8,clipact:22,clone:26,close:[21,22,23],cnn:[6,7,9,21,24],cnnactorcrit:21,cnnpolici:21,cnnvalu:21,code:25,coeffici:[2,3,5,9],collect:[7,22],collect_reward:20,collect_rollout:20,com:[2,26],comma:24,common:[14,15,19,24],compat:26,compos:21,compress:22,comput:[6,7,9,16,17,21,23],compute_returns_and_advantag:21,confid:[16,17],connect:[7,21,23],consequ:18,conserv:22,consid:7,construct:23,contain:21,content:[1,13,27],context:[0,16,23],contextu:[0,16],contextual_bandit:[1,13,16],contextualbandit:[0,16],continue_train:21,control:[16,17],convert:[21,22],convolut:21,copi:[7,8,21],core:[2,3,5,6,7,8,9,10,11,18,21,22,23],correct:21,count:[16,17],cpu:[5,6,7,8,9,10,11,21],creat:5,create_model:[5,6,7,8,9,10,11,20],critic:[5,9,11,21],csv:[21,24],csvlogger:21,cuda:[5,6,7,8,9,10,11],current:[0,3,16,17,21,22],data:[21,22],ddpg:[10,12,13],debug:22,decai:[6,7,9,10],deep:[13,14,25,27],defin:[7,21],definit:7,degre:[16,17],delai:10,depend:[7,21,26],dequ:22,determinist:[5,6,7,8,9,10,11,18,21,22],deterministic_act:21,deviat:[5,6,10,21],devic:[5,6,7,8,9,10,11,21],dict:[5,6,7,8,9,10,11,20,21,22],differ:[16,17],dimens:[9,18,21,22],directli:22,directori:21,discount:[2,3,5,6,7,8,9,10,11,21],discret:[18,21],displai:[22,23],distibut:[16,17],distribut:[0,7,9,16,17,21],divis:23,doi:3,done:[5,6,7,8,10,11,20,21,22],doubl:7,double_dqn:7,download:3,downsampl:22,dqn:[12,13],drawn:18,duel:7,dueling_dqn:7,duelingdqnvaluecnn:7,duelingdqnvaluemlp:7,dure:21,dyna:18,each:[0,7,16,17,18,21,22,23],easiest:26,edu:3,effici:22,either:[22,23],element:21,elig:3,els:[5,21],empti:[5,6,7,8,9,10,11,22],empty_log:[5,6,7,8,9,10,11],enabl:21,encapsul:25,encod:21,encourag:[16,17],end:21,entri:21,entropi:[5,9],entropy_coeff:5,entropy_tun:9,env:[2,3,5,6,7,8,9,10,11,18,20,21,22,23,24],env_id:22,env_typ:[22,24],environ:[2,3,5,6,7,8,9,10,11,14,16,17,18,21,24,25,27],envrion:3,episod:[5,6,7,9,10,18,21],episode_reward:[21,24],episode_timestep:21,epoch:[5,6,7,8,9,10,11,20,21,24],eps:[16,17],epsgreedycbpolici:16,epsgreedypolici:17,epsilon:[2,3,5,6,7,8,9,10,16,17,20,23],epsilon_decai:7,equival:21,espilon:[16,17],estim:[18,21],eval_ep:18,eval_episod:24,evalu:[18,21,24],evaluate_act:8,evaluate_episod:[21,24],evaluate_frequ:18,everi:[7,10,21,22],execut:23,experi:21,explicitli:7,exploit:3,explor:[2,3,16,17,18],exploratori:[6,9,10],expon:21,extend:21,extens:25,facilit:23,factor:[2,3,5,6,7,8,9,10,11,21],fals:[2,5,6,7,8,9,10,11,17,18,21,22],fc_layer:[7,21],featur:[7,21],few:22,field:21,file:21,filter:18,find:21,fire:22,firereset:22,first:[6,9,10],fix:0,flatten:21,follow:[0,21,26],form:2,format:[21,22,23],former:7,forward:[7,21],frame:[7,21,22],frame_stack:[14,27],frameskip:22,framestack:[7,21,22],from:[0,5,6,7,8,9,10,11,16,17,18,21,22,23,24,25],frozenlak:24,fulli:[7,21],gae_lambda:21,game:22,gamma:[2,3,5,6,7,8,9,10,11,20,21],gaussain:0,gaussian:0,gaussianbandit:0,gaussiancb:0,gener:[7,18,21],genrl:[1,4,12,13,24,26],get:[0,5,16,17,18,21,25],get_act:[2,3,21],get_actor_critic_from_nam:21,get_env_properti:21,get_hyperparam:[5,6,7,8,9,10,11],get_hyperparamet:20,get_len:21,get_logger_by_nam:21,get_logging_param:[5,6,7,8,9,10,11],get_loss:20,get_model:21,get_model_from_nam:18,get_p_loss:[6,10],get_policy_from_nam:21,get_q_loss:[6,10],get_spac:23,get_td_loss:7,get_traj_loss:[5,8,11],get_valu:21,get_value_from_nam:[18,21],get_value_log_prob:[5,11],git:26,github:26,give:21,given:[0,7,9,11,16,17,18,21,22],global:18,gpu:[7,8,10,11],gradient:[6,11],gradientcbpolici:16,gradientpolici:17,grayscal:22,greedi:[2,3,6,7,9,10,16,17],gym:[2,3,5,6,7,8,9,10,11,18,21,22,23,24,26],gym_wrapp:[14,27],gymenv:22,gymwrapp:22,has:[11,16,17,18],heavi:25,helper:7,hidden:[5,6,7,10,21],high:[22,25],highest:[16,17,21],histori:[7,16,17],hook:7,http:[2,3,5,6,7,8,9,10,11,26],human:[21,22,23],humanoutputformat:21,hyperparamet:[5,20,24],ignor:7,imag:[22,23],implement:[0,16,17,21,22,25],in_featur:7,in_siz:21,indic:[16,17,21],info:22,inform:21,inherit:21,initi:[6,7,8,9,11,16,17,18,20,21,22,24],initial_nois:21,initialis:[5,16,17],inp:[7,21],input:[7,21],instal:25,instanc:7,instead:7,intend:26,interact:[2,18,21],intern:[7,20],introduc:22,introduct:[16,17],is_empti:18,ist:3,iter:[7,23],its:21,kei:21,kernel:21,kernel_s:21,kind:22,kvs:21,kwarg:[5,8,11,20,21,23],last:22,last_valu:21,later:26,latest:26,latter:7,layer:[5,6,7,8,9,10,11,20,21],lazyfram:22,lear:7,learn:[2,3,5,6,7,8,9,10,11,16,17,18],length:21,level:[16,17,21,25],librari:26,like:[6,7,9,10,21],likelihood:9,limit:[21,22],linear:21,link:2,list:[5,7,10,16,17,18,21,22,23,24],lmbda:3,load:[5,6,7,8,9,10,11,21],load_model:[8,11,21],load_param:21,load_weight:[5,6,7,8,9,10,11],log:[5,6,7,8,9,10,11,21,24,25],log_interv:21,log_mod:21,log_prob:21,logdir:21,logger:[14,19],loop:18,loss:[5,6,7,9,11,20],low:22,lower:22,lr_actor:5,lr_critic:5,lr_p:[6,10],lr_polici:[5,8,11,20],lr_q:[6,10],lr_valu:[5,8,20],lz4:22,made:25,mai:21,maintain:21,make:[22,24],mani:21,max:[16,17,21],max_ep_len:[5,6,7,9,10,21],max_epsilon:7,max_iterations_per_epoch:7,max_key_len:21,max_noop:22,maximis:[16,17],maximum:[5,6,7,9,10,22],maxlen:21,mean:[0,9,21,22,23],mechan:21,memori:[6,7,9,10,21,22],method:[0,8,11,16,17,20,22],min_epsilon:7,mlp:[5,6,7,8,9,10,11,18,21,24],mlpactorcrit:21,mlppolici:21,mlpvalu:21,mode:[18,21,22,23,24],model:[5,6,7,8,9,10,11,14,15,21,23],modul:[1,13,27],monitor:[5,6,7,8,9,10,11],move:18,multi:[0,16,17],multipl:23,multiprocess:23,must:22,n_env:[21,22,23,24],n_episod:[18,21,24],n_step:21,n_timestep:[16,17],name:[18,21,22],name_:[18,21],ndarrai:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],need:[0,5,7,16,17,18,21,22,23],network:[5,6,7,8,9,10,11,20,21],network_typ:[5,6,7,8,9,10,11,20,21],neural:[5,6,7,8,9,10,11,21],neuron:[5,6,10],next:[6,7,18,22],next_observ:21,next_stat:[2,6,7,10,18,21],nip:11,node:7,nois:[5,6,10,14,19],noise_std:[5,6,10],noisi:7,noisy_dqn:7,noisy_lay:7,noisy_mlp:7,noisydqn:7,noisydqnvalu:7,noisydqnvaluecnn:7,noisylinear:7,non:22,none:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],noop:22,noopreset:22,normal:[9,21],normalactionnois:21,note:[21,26],num:21,num_atom:7,num_episod:5,number:[0,5,6,7,8,9,10,11,16,17,18,21,22,23],numpi:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],object:[0,2,3,6,7,9,10,16,17,18,21,22,23],obs:21,obs_shap:[22,23],observ:[0,5,6,7,8,9,20,21,22],observation_spac:23,obtain:[16,17],off:21,off_polici:21,offpolicytrain:[21,24],old:8,old_act:8,old_log_prob:21,old_stat:8,old_valu:21,onc:[16,17,22],one:[7,22],onli:22,onpolicyag:[5,8,11,20],onpolicytrain:[21,24],openai:26,oper:[5,6,7,8,9,10,11],optim:[2,5,6,7,8,9,11,16,17,20,22],option:[2,6,7,9,10,18,21],order:[21,26],org:[5,6,7,8,9,10],ornstein:21,ornsteinuhlenbeckactionnois:21,other:22,out:21,out_featur:7,output:[7,21,22],over:[6,16,17],overal:5,overridden:[7,22],overriden:22,packag:[1,13,25,27],pair:[16,18],paper:[2,3,5,6,7,8,9,10,11],paral:22,parallel:[21,22,23],parallelli:22,param:[6,8,18,21,22,23],paramerter:[16,17],paramet:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],parameter:[9,16,17],parameterized_replai:7,parent:23,parent_conn:23,parmet:[16,17],pass:[7,21],path:[8,11],pdf:[3,7,11],pendulum:24,per:[5,6,7,8,9,10,11,18,21,22],perform:[7,21,22],phase:[2,3],pip:26,pipe:23,plan:18,plan_n_step:18,plot:[18,24],polici:[5,6,8,9,10,11,14,16,19,20],policy_copy_interv:8,policy_frequ:10,polyak:[6,9,10],popular:25,pos:21,post:21,ppo1:[12,13,24],ppo2:21,ppo:21,prefer:26,preprocess:22,present:21,pretrain:[5,6,7,8,9,10,11],prevent:23,previou:21,priorit:[7,21],prioriti:21,prioritized_replai:7,prioritized_replay_alpha:7,prioritizedbuff:21,probability_hist:[16,17],probabilti:[16,17],probabl:[0,16,17,21],process:[6,7,9,10,21,22,23],project:[7,26],projection_distribut:7,properti:[0,16,17,21,22,23],proxim:8,psu:3,publish:26,push:21,pushreplaybuff:21,pypi:25,python:26,pytorch:[7,21,26],qlearn:[4,13,24],qsa:21,qualiti:[16,17],random:[16,17,18,22],randomli:[0,21],rate:[2,3,5,6,7,8,9,10,11,16,17],readabl:21,readi:25,receiv:[16,17],reciev:[16,17],recip:7,refer:[16,17,21],regist:7,regret:[16,17],regret_hist:[16,17],regular:22,reinforc:[11,16,17],releas:26,relu:21,render:[5,6,7,9,10,18,21,22,23,24],rep1:3,rep:3,replai:[6,7,9,10,21],replay_s:[6,7,9,10],replaybuff:21,replaybuffersampl:21,repres:21,reproduc:[5,21,23],requir:[2,16,17,21,22],requires_init_run:[16,17],rescal:22,rescaleact:22,reset:[0,7,21,22,23],reset_nois:7,reset_paramet:7,respect:21,result:[5,18],reusabl:25,reward:[0,2,5,6,7,10,16,17,18,21,22,24],reward_hist:[16,17],reward_mean:0,reward_prob:0,rgb_arrai:[22,23],rollout:[5,11,21],rollout_s:[5,8,11,20,24],rollout_storag:[14,19],rolloutbuff:21,rolloutbuffersampl:21,rolloutreturn:21,round:21,routin:26,rtype:[21,22],run:[7,16,17,21,22,23],run_num:21,runningmeanstd:23,s_dim:18,sac:[12,13,21],safe_mean:21,same:22,sampl:[0,9,11,16,17,18,21,22,23],sample_act:9,sarsa:[4,13],save:[5,21,22],save_interv:21,save_model:21,scale:9,scratch:24,screen:22,screen_siz:22,section:[16,17],seed:[5,6,7,8,9,10,11,18,21,22,23],selction:[16,17],select:[2,3,5,6,7,8,9,10,11,16,17,20],select_act:[5,6,7,8,9,10,11,16,17,20],self:21,separ:24,serial:[22,23],serialvecenv:23,set:[21,22,23],set_se:21,setup:26,sforaidl:26,shape:[21,22,23],shortcut:22,should:[7,9,21,22],signal:21,silent:7,similar:[22,23],simpli:26,sinc:7,size:[5,6,7,9,10,11,16,17,18,21,22],small:[21,23],soft:[9,16,17,21],softmax:[16,17],solv:[16,17,21],solver:[16,17],some:[22,24],sourc:25,space:[7,21,22,23],specif:[0,16,17,21,22],specifi:[21,24],springer:2,squar:[21,22],stabl:21,stack:[21,22],standard:[3,5,6,10,18,21],start:[6,10,16,17,21,22,25],start_plan:18,start_step:[6,9,10,18],start_upd:[6,9,10,21],startegi:[16,17],state:[2,3,5,6,7,8,9,10,11,18,20,21,22,23],state_dim:[7,18,21],stationari:0,statu:22,std:21,std_init:7,stdout:[21,24],step:[0,3,6,7,9,10,16,17,18,20,21,22,23],steps_per_epoch:[6,9,10,21],stochast:22,store:21,str:[5,6,7,8,9,10,11,18,20,21,22],strategi:[16,17],stride:21,string:[5,6,7,8,9,11,18,21,22,23],structur:[21,22],subclass:[7,22],submodul:[1,13,14,15,19,27],subpackag:[1,13,27],subprocess:22,subprocessvecenv:23,suit:[14,27],sum:[16,17,21],support:22,swap:21,swap_and_flatten:21,synchron:5,tabl:[2,3],tabular:18,tabularmodel:18,take:[0,6,7,9,16,17,20,21,22],taken:[0,3,7,16,17,22],target:[6,7,9,10],td3:[12,13],temp:[16,17],temperatur:[16,17],tensor:[5,6,7,8,9,10,11,21],tensorboard:[21,24],tensorboardlogg:21,term:[16,17],textiowrapp:21,them:7,theta:21,thi:[0,7,8,16,17,20],thing:21,thompsonsamplingcbpolici:16,thompsonsamplingpolici:17,through:[16,17,22,23],tile:[22,23],time:[16,17,22],time_limit:22,timestep:[5,6,7,8,9,10,11,16,17,18,20,21],timesteps_per_actorbatch:[5,8,11],to_torch:21,togeth:21,torch:[6,7,8,9,10,11,21],total:[20,21],trace:3,trade:21,train:[3,5,6,7,8,9,10,11,18,21,22,24],trainer:[14,15,19,22,24,25],trajectori:[5,8,11],transit:[2,3,18,21],tupl:[2,3,5,6,7,8,9,10,11,18,20,21,22,23],twin:10,type:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23,24],type_:21,ucbcbpolici:16,ucbpolici:17,uhlenbeck:21,underli:22,unifi:25,union:[0,5,6,7,8,9,10,11,18,21,22],unit:7,unreleas:26,until:22,updat:[2,3,5,6,7,8,9,10,11,16,17,18,21,22,23],update_interv:[6,7,9,10,20,21],update_param:[6,7,9,10,16,17,20],update_params_before_select_act:[6,7,9,10],update_polici:[5,8,11],update_prior:21,update_target_model:7,upgrad:26,upon:7,upper:[16,17,22],usag:22,use:[5,6,7,8,9,10,11,18,21,22,26],use_ga:21,usecas:21,used:[2,7,21],useful:[21,25],using:7,utf:21,util:[13,14,19,22],val_coeff:5,val_typ:21,valu:[3,5,6,7,8,11,14,15,16,17,19,20,22],vanilla:11,varianc:[21,23],variant:7,variou:7,vec_env:[5,6,7,8,9,10,11,14,21,22],vec_monitor:[14,22],vec_norm:[14,22],vec_wrapp:[14,22],vecenv:[5,6,7,8,9,10,11,21,22,23],vector:[22,24],vector_env:[5,6,7,8,9,10,11,14,21,22],vectorenv:[22,24],vectoris:[22,23],version:[5,26],viewdoc:3,vmax:7,vmin:7,vpg:[12,13,24],wai:26,want:[18,20,22],warmup_step:21,weight:[5,6,7,8,9,10,11,16,17,21],well:[6,7,9],when:21,whether:[3,7,11,21,22],which:[2,11,16,17,21],whose:22,window_s:18,within:7,worker:23,wrap:22,wrapper:[22,23],wrapper_list:22,write:21,write_to_fil:21,yet:18,you:[3,7,18,20,26],your:7,zero:23},titles:["genrl.classical.bandit package","Bandits","genrl.classical.qlearning","genrl.classical.sarsa","Classical","genrl.deep.agents.a2c","genrl.deep.agents.ddpg","genrl.deep.agents.dqn","genrl.deep.agents.ppo1","genrl.deep.agents.sac","genrl.deep.agents.td3","genrl.deep.agents.vpg","Deep","Algorithms","genrl package","genrl.classical package","genrl.classical.bandit.contextual_policies package","genrl.classical.bandit.policies package","genrl.classical.common package","genrl.deep package","genrl.deep.agents package","genrl.deep.common package","genrl.environments package","genrl.environments.vec_env package","Getting Started","Welcome to GenRL\u2019s documentation!","Installation","genrl","Tutorials"],titleterms:{a2c:5,action_wrapp:22,actor:24,actor_crit:21,agent:[5,6,7,8,9,10,11,20],algorithm:13,atari_preprocess:22,atari_wrapp:22,bandit:[0,1,16,17],base:[16,17,20,21],base_wrapp:22,bayesian:[16,17],buffer:21,classic:[0,2,3,4,15,16,17,18,24],common:[18,21],content:[0,2,3,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,25],contextual_bandit:0,contextual_polici:16,critic:24,ddpg:6,deep:[5,6,7,8,9,10,11,12,19,20,21,24],document:25,dqn:7,dyna:24,environ:[22,23],epsgreedi:[16,17],featur:25,frame_stack:22,from:26,genrl:[0,2,3,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,25,27],get:24,gradient:[16,17,24],gym_wrapp:22,instal:26,logger:21,model:[18,24],modul:[0,2,3,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23],nois:21,optim:24,packag:[0,14,15,16,17,18,19,20,21,22,23,26],polici:[17,21,24],ppo1:8,ppo:24,proxim:24,pypi:26,qlearn:2,rollout_storag:21,sac:[9,24],sarsa:3,soft:24,sourc:26,start:24,submodul:[0,2,3,5,6,7,8,9,10,11,16,17,18,20,21,22,23],subpackag:[0,14,15,19,20,22],suit:22,tabular:24,td3:10,thompson:[16,17],trainer:[18,21],tutori:28,ucb:[16,17],util:[7,21,23],valu:[18,21],vanilla:24,vec_env:23,vec_monitor:23,vec_norm:23,vec_wrapp:23,vector_env:23,vpg:11,welcom:25}})