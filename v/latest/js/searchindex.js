Search.setIndex({docnames:["acquisition","exceptions","fit","gen","index","models","optim","posteriors","sampling","settings","test_functions","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["acquisition.rst","exceptions.rst","fit.rst","gen.rst","index.rst","models.rst","optim.rst","posteriors.rst","sampling.rst","settings.rst","test_functions.rst","utils.rst"],objects:{"botorch.acquisition":{acquisition:[0,0,0,"-"],analytic:[0,0,0,"-"],fixed_feature:[0,0,0,"-"],monte_carlo:[0,0,0,"-"],objective:[0,0,0,"-"],utils:[0,0,0,"-"]},"botorch.acquisition.acquisition":{AcquisitionFunction:[0,1,1,""]},"botorch.acquisition.acquisition.AcquisitionFunction":{forward:[0,2,1,""],set_X_pending:[0,2,1,""]},"botorch.acquisition.analytic":{AnalyticAcquisitionFunction:[0,1,1,""],ConstrainedExpectedImprovement:[0,1,1,""],ExpectedImprovement:[0,1,1,""],NoisyExpectedImprovement:[0,1,1,""],PosteriorMean:[0,1,1,""],ProbabilityOfImprovement:[0,1,1,""],UpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.analytic.AnalyticAcquisitionFunction":{set_X_pending:[0,2,1,""]},"botorch.acquisition.analytic.ConstrainedExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.NoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.PosteriorMean":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.UpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.fixed_feature":{FixedFeatureAcquisitionFunction:[0,1,1,""]},"botorch.acquisition.fixed_feature.FixedFeatureAcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo":{MCAcquisitionFunction:[0,1,1,""],qExpectedImprovement:[0,1,1,""],qNoisyExpectedImprovement:[0,1,1,""],qProbabilityOfImprovement:[0,1,1,""],qSimpleRegret:[0,1,1,""],qUpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.monte_carlo.MCAcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qNoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qSimpleRegret":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qUpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.objective":{ConstrainedMCObjective:[0,1,1,""],GenericMCObjective:[0,1,1,""],IdentityMCObjective:[0,1,1,""],LinearMCObjective:[0,1,1,""],MCAcquisitionObjective:[0,1,1,""],ScalarizedObjective:[0,1,1,""]},"botorch.acquisition.objective.ConstrainedMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.GenericMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.IdentityMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.LinearMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.MCAcquisitionObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.ScalarizedObjective":{forward:[0,2,1,""]},"botorch.acquisition.utils":{get_acquisition_function:[0,3,1,""],get_infeasible_cost:[0,3,1,""],is_nonnegative:[0,3,1,""],prune_inferior_points:[0,3,1,""]},"botorch.exceptions":{errors:[1,0,0,"-"],warnings:[1,0,0,"-"]},"botorch.exceptions.errors":{BotorchError:[1,1,1,""],CandidateGenerationError:[1,1,1,""],UnsupportedError:[1,1,1,""]},"botorch.exceptions.warnings":{BadInitialCandidatesWarning:[1,1,1,""],BotorchWarning:[1,1,1,""]},"botorch.fit":{fit_gpytorch_model:[2,3,1,""]},"botorch.gen":{gen_candidates_scipy:[3,3,1,""],gen_candidates_torch:[3,3,1,""],get_best_candidates:[3,3,1,""]},"botorch.models.gp_regression":{FixedNoiseGP:[5,1,1,""],HeteroskedasticSingleTaskGP:[5,1,1,""],SingleTaskGP:[5,1,1,""]},"botorch.models.gp_regression.FixedNoiseGP":{fantasize:[5,2,1,""],forward:[5,2,1,""]},"botorch.models.gp_regression.HeteroskedasticSingleTaskGP":{condition_on_observations:[5,2,1,""]},"botorch.models.gpytorch":{BatchedMultiOutputGPyTorchModel:[5,1,1,""],GPyTorchModel:[5,1,1,""],ModelListGPyTorchModel:[5,1,1,""],MultiTaskGPyTorchModel:[5,1,1,""]},"botorch.models.gpytorch.BatchedMultiOutputGPyTorchModel":{condition_on_observations:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.GPyTorchModel":{condition_on_observations:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.ModelListGPyTorchModel":{condition_on_observations:[5,2,1,""],num_outputs:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.MultiTaskGPyTorchModel":{posterior:[5,2,1,""]},"botorch.models.model":{Model:[5,1,1,""]},"botorch.models.model.Model":{condition_on_observations:[5,2,1,""],fantasize:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.model_list_gp_regression":{ModelListGP:[5,1,1,""]},"botorch.models.model_list_gp_regression.ModelListGP":{condition_on_observations:[5,2,1,""]},"botorch.models.multitask":{FixedNoiseMultiTaskGP:[5,1,1,""],MultiTaskGP:[5,1,1,""]},"botorch.models.multitask.MultiTaskGP":{forward:[5,2,1,""]},"botorch.optim":{fit:[6,0,0,"-"],initializers:[6,0,0,"-"],numpy_converter:[6,0,0,"-"],optimize:[6,0,0,"-"],parameter_constraints:[6,0,0,"-"],utils:[6,0,0,"-"]},"botorch.optim.fit":{OptimizationIteration:[6,1,1,""],fit_gpytorch_scipy:[6,3,1,""],fit_gpytorch_torch:[6,3,1,""]},"botorch.optim.fit.OptimizationIteration":{fun:[6,2,1,""],itr:[6,2,1,""],time:[6,2,1,""]},"botorch.optim.initializers":{gen_batch_initial_conditions:[6,3,1,""],gen_one_shot_kg_initial_conditions:[6,3,1,""],initialize_q_batch:[6,3,1,""],initialize_q_batch_nonneg:[6,3,1,""]},"botorch.optim.numpy_converter":{TorchAttr:[6,1,1,""],module_to_array:[6,3,1,""],set_params_with_array:[6,3,1,""]},"botorch.optim.numpy_converter.TorchAttr":{device:[6,2,1,""],dtype:[6,2,1,""],shape:[6,2,1,""]},"botorch.optim.optimize":{joint_optimize:[6,3,1,""],optimize_acqf:[6,3,1,""],optimize_acqf_cyclic:[6,3,1,""],sequential_optimize:[6,3,1,""]},"botorch.optim.parameter_constraints":{eval_lin_constraint:[6,3,1,""],lin_constraint_jac:[6,3,1,""],make_scipy_bounds:[6,3,1,""],make_scipy_linear_constraints:[6,3,1,""]},"botorch.optim.utils":{ConvergenceCriterion:[6,1,1,""],columnwise_clamp:[6,3,1,""],fix_features:[6,3,1,""],sample_all_priors:[6,3,1,""]},"botorch.optim.utils.ConvergenceCriterion":{evaluate:[6,2,1,""]},"botorch.posteriors":{gpytorch:[7,0,0,"-"],posterior:[7,0,0,"-"]},"botorch.posteriors.gpytorch":{GPyTorchPosterior:[7,1,1,""]},"botorch.posteriors.gpytorch.GPyTorchPosterior":{device:[7,2,1,""],dtype:[7,2,1,""],event_shape:[7,2,1,""],mean:[7,2,1,""],rsample:[7,2,1,""],variance:[7,2,1,""]},"botorch.posteriors.posterior":{Posterior:[7,1,1,""]},"botorch.posteriors.posterior.Posterior":{device:[7,2,1,""],dtype:[7,2,1,""],event_shape:[7,2,1,""],mean:[7,2,1,""],rsample:[7,2,1,""],sample:[7,2,1,""],variance:[7,2,1,""]},"botorch.sampling":{qmc:[8,0,0,"-"],samplers:[8,0,0,"-"]},"botorch.sampling.qmc":{MultivariateNormalQMCEngine:[8,1,1,""],NormalQMCEngine:[8,1,1,""]},"botorch.sampling.qmc.MultivariateNormalQMCEngine":{draw:[8,2,1,""]},"botorch.sampling.qmc.NormalQMCEngine":{draw:[8,2,1,""]},"botorch.sampling.samplers":{IIDNormalSampler:[8,1,1,""],MCSampler:[8,1,1,""],SobolQMCNormalSampler:[8,1,1,""]},"botorch.sampling.samplers.MCSampler":{collapse_batch_dims:[8,4,1,""],forward:[8,2,1,""],resample:[8,4,1,""],sample_shape:[8,4,1,""]},"botorch.test_functions":{Ackley:[10,1,1,""],AugmentedBranin:[10,1,1,""],AugmentedHartmann:[10,1,1,""],AugmentedRosenbrock:[10,1,1,""],Beale:[10,1,1,""],Branin:[10,1,1,""],Bukin:[10,1,1,""],Cosine8:[10,1,1,""],DixonPrice:[10,1,1,""],DropWave:[10,1,1,""],EggHolder:[10,1,1,""],Griewank:[10,1,1,""],Hartmann:[10,1,1,""],HolderTable:[10,1,1,""],Levy:[10,1,1,""],Michalewicz:[10,1,1,""],Powell:[10,1,1,""],Rastrigin:[10,1,1,""],Rosenbrock:[10,1,1,""],Shekel:[10,1,1,""],SixHumpCamel:[10,1,1,""],StyblinskiTang:[10,1,1,""],SyntheticTestFunction:[10,1,1,""],ThreeHumpCamel:[10,1,1,""]},"botorch.test_functions.Ackley":{evaluate_true:[10,2,1,""]},"botorch.test_functions.AugmentedBranin":{evaluate_true:[10,2,1,""]},"botorch.test_functions.AugmentedHartmann":{evaluate_true:[10,2,1,""]},"botorch.test_functions.AugmentedRosenbrock":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Beale":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Branin":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Bukin":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Cosine8":{evaluate_true:[10,2,1,""]},"botorch.test_functions.DixonPrice":{evaluate_true:[10,2,1,""]},"botorch.test_functions.DropWave":{evaluate_true:[10,2,1,""]},"botorch.test_functions.EggHolder":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Griewank":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Hartmann":{evaluate_true:[10,2,1,""],optimal_value:[10,2,1,""]},"botorch.test_functions.HolderTable":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Levy":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Michalewicz":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Powell":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Rastrigin":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Rosenbrock":{evaluate_true:[10,2,1,""]},"botorch.test_functions.Shekel":{evaluate_true:[10,2,1,""]},"botorch.test_functions.SixHumpCamel":{evaluate_true:[10,2,1,""]},"botorch.test_functions.StyblinskiTang":{evaluate_true:[10,2,1,""]},"botorch.test_functions.SyntheticTestFunction":{evaluate_true:[10,2,1,""],forward:[10,2,1,""],optimal_value:[10,2,1,""]},"botorch.test_functions.ThreeHumpCamel":{evaluate_true:[10,2,1,""]},"botorch.utils":{constraints:[11,0,0,"-"],objective:[11,0,0,"-"],sampling:[11,0,0,"-"],transforms:[11,0,0,"-"]},"botorch.utils.constraints":{get_outcome_constraint_transforms:[11,3,1,""]},"botorch.utils.objective":{apply_constraints:[11,3,1,""],apply_constraints_nonnegative_soft:[11,3,1,""],get_objective_weights_transform:[11,3,1,""],soft_eval_constraint:[11,3,1,""]},"botorch.utils.sampling":{construct_base_samples:[11,3,1,""],construct_base_samples_from_posterior:[11,3,1,""],draw_sobol_normal_samples:[11,3,1,""],draw_sobol_samples:[11,3,1,""],manual_seed:[11,3,1,""]},"botorch.utils.transforms":{concatenate_pending_points:[11,3,1,""],convert_to_target_pre_hook:[11,3,1,""],match_batch_shape:[11,3,1,""],normalize:[11,3,1,""],squeeze_last_dim:[11,3,1,""],standardize:[11,3,1,""],t_batch_mode_transform:[11,3,1,""],unnormalize:[11,3,1,""]},botorch:{exceptions:[1,0,0,"-"],fit:[2,0,0,"-"],gen:[3,0,0,"-"],models:[5,0,0,"-"],optim:[6,0,0,"-"],posteriors:[7,0,0,"-"],sampling:[8,0,0,"-"],settings:[9,0,0,"-"],test_functions:[10,0,0,"-"],utils:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0th":0,"1st":0,"220446049250313e":6,"3pi":10,"abstract":[0,7,8,10],"boolean":6,"case":[0,7,11],"class":[0,1,3,5,6,7,8,10,11],"default":[0,2,3,6,8,11],"float":[0,3,6,10,11],"function":[0,2,3,5,6,8,10,11],"int":[0,3,5,6,8,11],"long":[5,6],"new":[2,5,6],"return":[0,2,3,5,6,7,8,10,11],"true":[0,3,5,6,8,10,11],"while":5,For:[0,6,11],GPs:5,One:5,The:[0,2,3,5,6,7,8,10,11],These:[0,6],Use:[5,6],Uses:0,__call__:[0,8],_construct_base_sampl:8,_construct_x_ful:0,a_1j:10,a_ij:10,abl:0,about:0,accord:6,accordingli:6,account:0,accur:0,accuraci:6,acklei:10,acq_funct:[0,6],acq_valu:6,acq_value_list:6,acqf:0,acquisit:[3,4,6,8,11],acquisition_funct:3,acquisition_function_nam:0,acquisitionfunct:6,acquisiton:6,acquist:6,across:[0,5,6,8,11],adam:[3,6],add:[5,6,10,11],added:[0,5],adding:0,addit:[0,6],addition:6,affin:0,after:6,afterward:5,algorithm:8,alia:6,all:[0,3,5,6,7,10,11],allow:[0,5,11],almost:0,along:[2,6],alpha:6,alpha_1:10,alpha_i:10,alreadi:[0,6],also:[5,6,11],although:5,alwai:0,ani:[2,3,5,6,11],anoth:[5,11],appear:6,appendix:0,appli:[0,6,11],applic:8,apply_constraint:[0,11],apply_constraints_nonnegative_soft:11,appropri:[0,6,7,11],approxim:[0,11],aquisitionfunct:0,arbitrari:0,arbitrary_q_method:11,area:6,arg:11,argument:[2,5,11],around:0,arrai:[0,6],arxiv:0,assertitionerror:11,associ:[0,3,6],assum:[0,3,5,6,11],attribut:[6,11],augment:10,augmentedbranin:10,augmentedhartmann:10,augmentedrosenbrock:10,auto:0,automat:11,averag:[0,11],b_min:10,backpropag:0,bad:1,baed:5,base:[0,1,5,6,7,8,10,11],base_sampl:7,basic:[6,11],batch:[0,3,5,6,7,8,11],batch_acq_valu:3,batch_candid:3,batch_initial_condit:6,batch_shap:[0,5,11],batch_shape_i:11,batch_shape_x:11,batch_valu:3,batchedmultioutputgpytorchmodel:2,beal:10,becom:11,been:[0,5],befor:0,behavior:0,being:0,benchmark:10,best:[0,3,5,6],best_candid:3,best_f:[0,3,6],beta:[0,6],better:[0,3],between:[0,5],bfg:[3,6],block:5,bool:[0,3,5,6,8,10,11],both:[0,5,6,8],bound:[0,3,6,11],bounds_out:6,box:[3,8,11],branin:10,broadcast:[0,5,6,11],bukin:10,c_i:10,cach:5,calcul:6,call:[0,5,6,7,8,11],callabl:[0,2,3,6,11],can:[0,2,5,6,11],candid:[0,1,3,6],canid:6,care:5,carlo:[0,8],cat:5,cei:0,ceil:0,certain:0,check:11,chosen:6,clamp:[3,6],classic:0,close:6,closur:6,coeff:6,coeffici:[3,6],collaps:8,collapse_batch_dim:[0,8,11],column:[0,3,5,6,11],columnwise_clamp:6,combin:0,come:5,commonli:10,compat:[3,5,11],complex:0,compris:0,comput:[0,5,11],concaten:[0,11],concatenate_pending_point:11,condit:[2,5,6],condition_on_observ:5,confid:0,conjunct:6,consid:[0,5,6],constant:10,constarint:0,constrain:[0,3,6,11],constrained_ei:0,constrained_object:0,constraint:[0,3,6],constraint_i:0,construct:[0,5,11],construct_base_sampl:11,construct_base_samples_from_posterior:11,constructor:[0,6,10],contain:[3,5,6,11],contextmanag:11,contextu:0,control:[0,2,3],conveni:[0,5],converg:6,convergencecriterion:6,convert:[3,6],convert_to_target_pre_hook:11,copi:0,correl:5,correspond:[5,6,11],cos:[5,10],cosin:10,cosine8:10,cost:[0,5],cov:8,covar_modul:5,covari:[0,5,8],cover:0,creat:[6,11],criterion:6,cube:5,current:[0,1,5,6],custom:[0,6],cycl:6,cyclic:6,cyclic_opt:6,d_f:0,data:[5,8,11],decor:11,deep:0,def:11,defin:[5,11],deisenroth:0,deprec:6,deriv:0,descent:6,design:[0,5,6],desir:8,detail:0,determin:[0,11],determinist:[0,7,8],deviat:[0,10],devic:[6,7,11],diagnost:6,dict:[0,3,6],dictionari:[0,3,6],differ:[0,5],differnti:0,dim:[0,5,6,7,10,11],dimens:[0,5,6,7,8,10,11],dimension:[0,6,10,11],direct:[6,11],directli:[0,8],disp:6,displai:6,distribut:[0,5,7,8,11],dixonpric:10,document:0,doe:[0,5,6,11],domain:10,don:6,downstream:6,draw:[0,7,8,11],draw_sobol_normal_sampl:11,draw_sobol_sampl:11,drawn:[5,8,11],dropwav:10,dtype:[6,7,8,11],dure:[0,1,6],each:[0,3,5,6,7,8,11],easiest:5,egghold:10,either:[0,6],element:[0,3,6,11],elimin:11,elment:6,empir:0,empti:6,enabl:6,encod:[3,6],enforc:6,engin:8,ensur:0,entri:6,equal:[3,6,11],equality_constraint:[3,6],error:5,estim:0,eta:[0,6,11],eval:6,eval_lin_constraint:6,evalu:[0,5,6,8,10,11],evaluate_tru:10,evalut:6,event:7,event_shap:[7,11],everi:5,exact:5,exactgp:5,exactli:0,exactmarginalloglikelihood:[2,6],exampl:[0,2,3,5,6,8,11],exampleacquisitionfunct:11,exampleclass:11,exce:0,except:[4,6],exclud:6,exp:[6,10,11],expand:11,expect:[0,6,11],expected_q:11,expens:0,explicit:6,extend:0,extract:[0,3,6],fact:6,factori:11,failur:2,fake:5,fals:[0,5,6,8,10],fanci:6,fantas:[5,6],fantasi:[0,5,6],far:0,fashion:[5,6,11],feasibilti:0,feasibl:[0,11],featur:[0,1,3,5,6],feature_index:6,fewer:5,fidel:10,field:6,financ:8,finit:6,first:6,fit:[0,4],fit_gpytorch_model:2,fit_gpytorch_scipi:[2,6],fit_gpytorch_torch:6,fix:[0,3,5,6],fix_featur:6,fixed_featur:[3,6],fixednoisegp:0,flat_idxr:6,flexibl:5,float32:8,follow:[5,6,8,11],fopt:6,form:[0,3,6],format:5,former:5,formula:0,forward:[0,5,8,10,11],frac_random:6,fraction:[0,6],from:[0,2,3,5,6,7,8,11],ftol:6,full:[0,5],full_lik:5,fulli:6,fun:6,funtion:6,fval:6,gaussian:0,gaussianlikelihood:5,gen:4,gen_batch_initial_condit:[3,6],gen_candidates_scipi:3,gen_candidates_torch:3,gen_one_shot_kg_initial_condit:6,gener:[0,1,3,5,6,8,11],generic_object:0,get:[0,6],get_acquisition_funct:0,get_best_candid:3,get_infeasible_cost:0,get_objective_weights_transform:11,get_outcome_constraint_transform:11,given:[0,11],global:10,gp_model:5,gp_regress:5,gpytorch:[2,6],gpytorchmodel:[0,6],gpytorchposterior:[0,5],gradient:[0,6,7],greedi:0,griewank:10,grow:11,h_min:10,hand:[6,11],handl:[0,6,11],hartmann:10,has:[0,5,6,10,11],have:[0,3,5,6],heavisid:11,helper:11,here:[5,6,10,11],heteroskeast:5,heteroskedast:5,heurist:6,higher:[0,3],highest:3,highli:0,holder:10,holdert:10,hook:[5,11],hutter:0,hypercub:10,hyperparamet:[2,5,6],i_d:[8,11],i_qm:11,i_qo:11,icm:5,icml:0,ident:11,identity_object:0,ignor:[5,6,8],iid:[0,8,11],implement:[0,5,8],impli:[0,11],importantli:11,impos:6,improv:0,improvemnt:0,includ:[2,3,5,6],independ:[0,5],index:[0,4,5,6,11],indic:[0,3,5,6,11],individu:[0,5],ineq:6,inequ:[3,6],inequality_constraint:[3,6],inf:0,infeas:[0,11],infeasible_cost:[0,11],infer:[0,5],infinit:10,inform:[0,6],initi:[0,1,2,3,5,8,11],initial_condit:3,initialize_q_batch:6,initialize_q_batch_nonneg:6,initit:6,input:[0,5,6,11],instanc:[0,5,6,11],instanti:0,instead:[0,5,6,8,11],interfac:5,intern:[0,5,6,8],interpret:0,introduc:11,introduct:8,intut:6,inv_transform:8,invers:8,involv:0,is_nonneg:0,issu:1,iter:[3,6],itr:6,its:[5,10],jacobian:6,joint:[0,5,6],joint_optim:6,jointli:[5,6],just:[3,5,6],keepdim:5,kei:[3,6],kernel:5,known:[0,5],kwarg:[0,2,5],lambda:0,larg:6,larger:11,last:[0,6,10,11],latter:5,least:[6,11],left:11,length:[0,6],less:6,level:5,levi:10,lhs:11,like:0,likelihood:[2,5,6],lin_constraint_jac:6,linear:[0,6,11],linear_object:0,list:[0,3,5,6,11],local:10,lower:[0,6,11],lower_bound:[3,6],lower_i:0,mai:6,make:[5,11],make_scipy_bound:6,make_scipy_linear_constraint:6,mani:10,manual:[0,11],manual_se:11,map:[0,6,11],margin:0,marginalloglikelihood:[2,6],match:11,match_batch_shap:11,maternkernel:5,math:10,matrix:[0,5,8],max:[0,6,11],max_frac:0,max_retri:2,maxim:[0,2,6,10],maximum:[0,2,3,6,10],maxit:[3,6],mc_acq:0,mc_obj:0,mc_sampl:[0,11],mcsampler:[0,5],mean:[0,5,6,7,8,11],meant:[5,6],measur:5,method:[0,3,5,6,8,11],michalewicz:10,min:[0,11],min_x:0,minim:[3,6,10],minima:10,minimum:[0,3,10],mininimum:10,miss:5,mixtur:10,mll:[2,6],mode:[0,3,5,6,11],model1:5,model2:5,model:[0,2,3,4,6,7,8,11],model_list_gp_regress:5,modellist:5,modellistgp:2,modul:[0,3,4,5,6,7,8,11],module_to_arrai:6,moham:0,mont:[0,8],more:[0,6],moriconi:0,most:10,muller:8,multi:[0,5,6,7,10,11],multipl:5,multistart:6,multitask:5,multitaskmultivariatenorm:7,multivari:8,multivariatenorm:[5,7],must:[0,5,6,8,11],mutput_shap:11,mvn:7,n_i:5,n_nz:0,n_param:6,n_sampl:11,name:[0,6],named_parameters_and_constraint:6,nativ:6,ndarrai:6,need:[0,5],neg:[0,6,11],negat:10,nei:0,new_i:5,new_x:5,no_grad:7,nois:[5,10],noise_std:10,noiseless:0,noisi:0,non:[0,6,11],none:[0,3,5,6,7,8,10,11],nonneg:[6,11],norm:5,normal:[0,5,7,8,11],note:[0,6],num_fantasi:[0,6],num_inner_restart:6,num_output:5,num_restart:[3,6],num_sampl:[0,8,11],number:[0,2,3,5,6,8,11],numer:[6,8],numpi:[3,6],obj:[0,11],object:[5,6,7],objective_index:0,observ:[0,5,6,10],observation_nois:5,observatioon:5,obtain:[0,6,7,11],off:0,offset:0,often:6,omit:[5,8],one:[0,5,6,10],ones:[5,11],onli:[0,5,6,11],oper:0,optim:[0,2,3,4,5,7,8,10,11],optimal_valu:10,optimizationiter:6,optimize_acqf:6,optimize_acqf_cycl:6,optimizer_cl:6,optimzi:[1,6],option:[0,3,5,6,7,8,10,11],order:[0,6],origin:5,other:5,otherwis:[6,8],out:[5,6,8],outcom:[0,5,6,11],outcome_constraint:11,outer:6,output:[0,3,5,6,7,8,11],output_indic:5,output_shap:11,output_task:5,over:[0,5,6,11],overridden:5,owen:11,own:5,p_1j:10,p_ij:10,packag:6,page:[4,8],pages2018numprob:8,paramet:[0,2,3,5,6,7,8,10,11],parameter_arrai:6,parameterbound:6,particular:6,pass:[0,2,5,6],pend:[0,11],per:5,perform:[0,3,5],perturb:6,place:[0,6],pleas:5,plu:[0,6],point:[0,3,5,6,10,11],posit:[6,11],possibl:[0,5,6],post:6,post_processing_func:6,posterior:[0,4,5,6,8,11],potenti:0,powel:10,pre:11,preced:6,predict:5,prefer:0,present:3,prevent:8,previous:0,primari:11,prior:[2,5,6,11],probabl:[0,6,8],problem:[0,3,6],process:6,prod_i:0,produc:[0,8],product_i:0,project:6,properti:[0,5,6,7,8,10],property_dict:6,proport:6,provid:[0,3,5,6,8,11],prune:0,prune_baselin:0,prune_inferior_point:0,publish:8,purpos:10,put:8,pytorch:3,qei:[0,3,6],qei_ff:0,qexpectedimprov:[3,6],qkg:6,qknowledgegradi:6,qmc:[0,6,11],qnei:0,qpi:0,qsr:0,quasi:[0,8,11],qucb:[0,6],qupperconfidencebound:6,rais:[1,6,11],raise_on_viol:6,rand:[5,6,11],rand_lik:5,random:[6,8,11],rang:6,rank:5,rastrigin:10,raw:6,raw_inner_sampl:6,raw_sampl:[3,6],recip:5,recommend:0,refer:8,regist:[5,6],regret:0,rel:[5,6],relev:[6,11],reli:0,remain:6,remov:0,reparameter:0,replac:[0,6],repres:[0,5],represent:6,request:0,requir:[0,5,6],requires_grad:6,resampl:8,resp:0,respect:[0,3,6,11],restart:6,result:[0,6,8],retain:0,retri:2,return_best_onli:6,rezend:0,rezende2014reparam:0,rhs:[3,6],right:6,rng:[8,11],rosenbrock:10,round:6,rsampl:7,run:5,same:[0,5,6,11],sampl:[0,2,4,5,6,7],sample_all_prior:6,sample_shap:[0,7,8,11],sampler:[0,5,7],satisfi:[0,6],scalabl:0,scalar:[0,6,11],scipi:[3,6],scipy_bound:6,scrambl:11,scriptmodul:[0,5,8],search:[3,4],second:6,see:[0,5,6],seed:[0,8,11],select:[0,3,5,6],self:[0,11],semant:5,sequenc:8,sequenti:[2,5,6],sequential_optim:6,set:[0,1,3,4,6,7,8,10,11],set_params_with_arrai:6,set_x_pend:0,shape:[0,5,6,7,8,11],shapex:6,share:[0,5,8],shekel:10,shift:11,shot:6,should:[0,5,6,8],side:[6,11],sigma:[0,8],sigmoid:[0,11],significantli:0,silent:5,similar:[5,6],simpl:[0,5,7],simpli:11,simplifi:6,sin:[5,10],sinc:[5,6],singl:[0,3,5,6,7,8,10,11],single_q_method:11,singletaskgp:[0,2,6],six:10,sixhumpcamel:10,size:[3,6,7,8,11],slsqp:3,smaller:0,smart:6,sobol:8,sobolengin:8,sobolqmcnormalsampl:0,soft:11,soft_eval_constraint:11,softmax:[6,11],solut:6,solv:6,solver:6,some:[0,11],sourc:[0,1,2,3,5,6,7,8,10,11],space:[0,5,6,11],specif:6,specifi:[5,6,7,10,11],speed:5,springer:8,sqrt:[0,10],squeez:11,squeeze_last_dim:[0,11],stack:[5,11],standard:[0,5,6,8,10,11],start:[3,6],state:[0,5,8],std:6,step:[0,6,11],stochast:[0,8],str:[0,3,6],strategi:[6,11],string:6,strong:5,structur:5,styblinski:10,styblinskitang:10,style:5,sub:5,subclass:[5,8],subject:0,submit:0,submodel:5,subset:[0,5],sum:[0,5],sum_:[0,10],sum_i:[3,6],support:[0,5,6,11],synthet:10,synthetictestfunct:10,synthtet:10,t_batch_mode_transform:11,tabl:10,take:[0,5,6,11],taken:5,tang:10,task:[5,6,11],task_featur:5,tau:0,temperatur:[0,6,11],tensor:[0,3,5,6,7,8,10,11],term:0,termin:6,test:[0,5,10],test_funct:4,test_x:[0,8],than:[5,6],thei:6,them:5,thi:[0,3,5,6,7,8,11],those:11,though:5,threehumpcamel:10,threshold:6,through:0,thu:8,time:[5,6],todo:[0,6],toler:6,tool:6,torch:[0,3,5,6,7,8,11],torchattr:6,total:6,track:6,track_iter:6,trade:0,tradeoff:0,train:[5,6],train_i:[0,2,5,6],train_input:6,train_target:6,train_x1:5,train_x2:5,train_x:[0,2,5,6],train_y1:5,train_y2:5,train_yvar:[0,5],transform:[0,6,8],trick:0,trip:6,trivial:0,tupl:[0,3,6,11],two:[0,6,10],type:[0,2,3,5,6,7,8,10,11],typic:[6,7,10,11],ucb:0,under:[0,6],underli:8,union:[0,3,6],uniqu:10,unit:[5,11],universitext:8,unknown:0,unlik:0,unnorm:11,unsupport:1,updat:[5,6],upon:0,upper:[0,6,11],upper_bound:[3,6],upper_i:0,use:[0,3,5,6,8,11],used:[0,3,5,6,7,8,10,11],useful:[0,6,8],uses:[0,3,5,6,8,11],using:[0,3,5,6,7,8,11],usingth:11,usual:[0,8,10],util:[2,3,4],valid:6,valu:[0,3,6,11],variabl:5,varianc:[0,5,7,8,11],variat:[7,11],vector:8,verbos:3,veri:5,version:10,via:[0,3,5,6,8,11],w_1:10,w_d:10,w_i:10,wai:5,wall:6,wall_tim:6,want:6,warn:5,weight:[0,6,11],weigth:0,well:[0,6],what:[0,6],when:[5,6],where:[0,3,5,6,10,11],whether:[0,6],which:[0,5,6,8,10],whose:[0,11],wierstra:0,wilson2017reparam:0,wilson:0,wise:[6,11],within:[5,11],without:[0,6,7],work:[5,11],would:0,wrap:5,wrapper:[0,5,7],x_1:[0,10],x_2:10,x_3:10,x_7:10,x_baselin:0,x_d:10,x_full:0,x_i:10,x_j:10,x_match:11,x_normal:11,x_observ:0,x_pend:[0,11],x_q:0,xinit:[3,6],xrnd:6,y_baselin:0,y_i:0,y_squeez:11,y_standard:11,y_tild:0,yet:0,yield:0,you:[5,6],z_1:10,z_2:10,z_3:10,z_4:10,z_i:10,zero:[0,5,6,11]},titles:["botorch.acquisition","botorch.exceptions","botorch.fit","botorch.gen","BoTorch API Reference","botorch.models","botorch.optim","botorch.posteriors","botorch.sampling","botorch.settings","botorch.test_functions","botorch.utils"],titleterms:{"abstract":5,acquisit:0,acquisitionfunct:0,analyt:0,analyticacquisitionfunct:0,api:[4,5],badinitialcandidateswarn:1,batchedmultioutputgpytorchmodel:5,botorch:[0,1,2,3,4,5,6,7,8,9,10,11],botorcherror:1,botorchwarn:1,candidategenerationerror:1,constrainedexpectedimprov:0,constrainedmcobject:0,constraint:11,error:1,except:1,expectedimprov:0,fit:[2,6],fixed_featur:0,fixedfeatureacquisitionfunct:0,fixednoisegp:5,fixednoisemultitaskgp:5,gen:3,genericmcobject:0,gpytorch:[5,7],gpytorchmodel:5,gpytorchposterior:7,heteroskedasticsingletaskgp:5,identitymcobject:0,iidnormalsampl:8,indic:4,initi:6,linearmcobject:0,mcacquisitionfunct:0,mcacquisitionobject:0,mcsampler:8,model:5,modellistgp:5,modellistgpytorchmodel:5,monte_carlo:0,multitaskgp:5,multitaskgpytorchmodel:5,multivariatenormalqmcengin:8,noisyexpectedimprov:0,normalqmcengin:8,numpy_convert:6,object:[0,11],optim:6,parameter_constraint:6,posterior:7,posteriormean:0,probabilityofimprov:0,qexpectedimprov:0,qmc:8,qnoisyexpectedimprov:0,qprobabilityofimprov:0,qsimpleregret:0,qupperconfidencebound:0,refer:4,regress:5,sampl:[8,11],sampler:8,scalarizedobject:0,set:9,singletaskgp:5,sobolqmcnormalsampl:8,tabl:4,test_funct:10,transform:11,unsupportederror:1,upperconfidencebound:0,util:[0,6,11],warn:1}})