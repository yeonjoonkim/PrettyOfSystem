import { Injectable } from '@angular/core';
import { MassageBodySelectorType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MassageBodyBackService {
  public list: MassageBodySelectorType[] = [
    //Back Left
    {
      id: 'back-left-tricepsbrachii',
      data: 'm 43.185645,27.069445 0.4297,-1.4164 1.30458,-1.68577 -1.39393,-2.96155 -2.28367,0.92162 -1.83567,1.7467 -0.53524,1.78673 0.27068,4.30806 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.tricepsbrachii',
      },
      enabled: true,
    },
    {
      id: 'back-right-tricepsbrachii',
      data: 'm 61.657445,27.250625 -0.32785,-1.05121 -1.27383,-2.05489 1.38708,-2.96476 2.28579,0.91634 1.83971,1.74245 0.53937,1.78549 -0.26073,4.30868 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.tricepsbrachii',
      },
      enabled: true,
    },
    {
      id: 'back-left-carpiflexorulnaris',
      data: ' m 40,42 -1.43509,-0.746 -0.30622,-7.00985 c 0,0 0.64359,-2.77938 0.63694,-3.06274 l 0.6093,-1.21924 3.62552,-2.56583 -0.68276,1.9919 0.41561,4.74788 -1.80402,7.69727 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.carpiflexorulnaris',
      },
      enabled: true,
    },
    {
      id: 'back-right-carpiflexorulnaris',
      data: 'm 64.9,42 1.43335,-0.74932 0.29002,-7.01054 c 0,0 -0.65,-2.77789 -0.64401,-3.06126 l -0.61212,-1.21783 -3.98124,-2.57566 1.0222,1.93525 -0.38967,4.82212 1.8218,7.69308 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.carpiflexorulnaris',
      },
      enabled: true,
    },
    {
      id: 'back-left-hand',
      data: 'm 40.8,42.2 -1.5182,0.0863 -0.78184,-0.65295 -1.16168,2.1855 -0.78414,3.34805 0.49892,0.20949 0.54632,-2.2158 0.50597,0.24175 -0.29779,2.5019 0.62936,0.22875 0.35546,-2.50096 0.56242,0.16536 -0.16126,2.77057 0.77674,0.30455 0.19056,-2.87291 0.45724,-0.0289 0.22827,2.64778 0.66597,0.24774 -0.0359,-4.56685 0.33693,-0.20224 1.39227,1.65147 0.32017,-0.35115 -0.77444,-2.03749 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.hand',
      },
      enabled: true,
    },
    {
      id: 'back-right-hand',
      data: 'm 64,42.2 1.51839,0.0828 0.78033,-0.65476 1.16673,2.18281 0.79187,3.34623 -0.49843,0.21064 -0.55144,-2.21453 -0.50541,0.24292 0.30356,2.5012 -0.62882,0.23021 -0.36124,-2.50014 -0.56203,0.16666 0.16765,2.77019 -0.77603,0.30634 -0.19719,-2.87245 -0.45732,-0.0278 -0.22215,2.64829 -0.66539,0.24928 0.0254,-4.56692 -0.3374,-0.20146 -1.38845,1.65469 -0.32098,-0.35041 0.76973,-2.03928 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.hand',
      },
      enabled: true,
    },
    {
      id: 'back-left-hamstring',
      data: 'm 47.2,51.5 4.55099,-2.03879 0.63802,0.23079 0.0353,1.80672 0.075,4.64669 -1.97837,6.04282 0.47612,1.41403 -1.42812,3.29446 -1.76611,-0.30111 -0.50079,-2.11605 -0.1695,-1.75674 -2.42102,-8.15763 -0.34279,-3.64687 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.hamstring',
      },
      enabled: true,
    },
    {
      id: 'back-right-hamstring',
      data: 'm 57.4,51.3 -3.97962,-1.70224 -0.56389,0.27131 -0.0528,1.79746 -0.075,4.64669 1.97837,6.04282 -0.47612,1.41403 1.42813,3.29446 1.7661,-0.30111 0.50079,-2.11605 0.1695,-1.75674 2.42102,-8.15763 0.009,-3.68308 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.hamstring',
      },
      enabled: true,
    },
    {
      id: 'back-left-gastrocnemius',
      data: 'm 51.176145,64.073985 -1.20605,3.01461 0.70738,0.26558 0.89754,3.51771 -0.55801,-4.01191 z m -5.08496,-3.15003 0.63355,1.8609 0.16813,2.03261 0.61314,1.93117 -0.90585,-0.0851 -0.28534,2.15982 z m 4.3014,6.58834 1.27664,4.99697 -0.28984,3.02284 -0.67869,10.06546 -1.66325,0.63506 -3.50399,-11.96959 1.24985,-7.17525 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.gastrocnemius',
      },
      enabled: true,
    },
    {
      id: 'back-right-gastrocnemius',
      data: 'm 54.019305,64.073985 1.20605,3.01461 -0.70737,0.26558 -0.89755,3.51771 0.55802,-4.01191 z m 5.08496,-3.15003 -0.63355,1.8609 -0.16813,2.03261 -0.61313,1.93117 0.90584,-0.0851 0.28534,2.15982 z m -4.3014,6.58834 -1.27664,4.99697 0.28984,3.02284 0.67869,10.06546 1.66325,0.63506 3.504,-11.96959 -1.24986,-7.17525 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.gastrocnemius',
      },
      enabled: true,
    },
    {
      id: 'back-left-heel',
      data: 'm 51,88.3 0.85194,1.3581 0.37189,0.79238 -0.15588,1.21774 -0.76984,0.74446 -1.51185,0.12543 -1.1299,-0.29192 -0.24225,-0.95894 0.80765,-1.30405 -0.22562,-0.85987 0.29679,-0.84153 -0.0194,-1.81524 1.53568,-0.54817 z m -1.19598,0.4675 0.15943,1.25776 -0.6023,0.97431 m -0.54436,0.29544 1.06474,0.40084 1.55326,-0.65137',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.heel',
      },
      enabled: true,
    },
    {
      id: 'back-right-heel',
      data: 'm 54,88.3 -0.85194,1.3581 -0.37189,0.79238 0.15589,1.21774 0.76983,0.74446 1.51186,0.12543 1.12989,-0.29192 0.24225,-0.95894 -0.80765,-1.30405 0.22563,-0.85987 -0.29679,-0.84153 0.0194,-1.81524 -1.53568,-0.54817 z m 1.19598,0.4675 -0.15943,1.25776 0.6023,0.97431 m 0.54436,0.29544 -1.06474,0.40084 -1.55326,-0.65137',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.heel',
      },
      enabled: true,
    },
    {
      id: 'back-center-gluteusmaximus',
      data: 'm 44.742845,39.689035 5.48374,1.86457 2.27386,1.3378 2.74195,-1.74412 4.51804,-1.28077 0.90009,2.29721 0.675,3.4346 -0.81272,5.02838 -2.82636,0.16819 -4.11256,-1.67581 -1.00814,0.39118 -0.95849,-0.39888 -4.44053,1.94411 -2.77023,-0.51478 -0.95181,-6.15325 0.36754,-2.7864 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Center',
        positionName: '',
        name: 'label.title.gluteusmaximus',
      },
      enabled: true,
    },
    {
      id: 'back-center-lowback',
      data: 'm 51.818445,37.309575 0.14418,2.97292 1.15984,-0.0241 0.048,-2.96488 2.80867,-0.81981 2.34029,-0.7541 1.34121,3.73319 -4.77886,1.36455 -2.33301,1.2158 -2.37536,-1.2333 -5.45663,-1.37716 1.51961,-3.95743 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Center',
        positionName: '',
        name: 'label.title.lowback',
      },
      enabled: true,
    },
    {
      id: 'back-center-multifidus',
      data: 'm 51.733705,14.788555 0.53876,25.33066 0.48967,-0.0297 0.65658,-25.3387 -0.28147,-0.84188 -1.25059,-4.9e-4 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Center',
        positionName: '',
        name: 'label.title.multifidus',
      },
      enabled: true,
    },
    {
      id: 'back-center-head',
      data: 'm 48.157455,6.3585449 0.44208,-0.14964 0.16111,0.16427 1.48163,4.0475101 2.32401,1.45118 2.39971,-1.52387 0.97577,-3.6896901 0.52752,-0.55908 0.23367,0.0981 0.24198,-3.34467 -2.03129,-2.31103004 -2.84509,-0.51629 -2.20422,0.52915 -1.93631,2.63077004 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Center',
        positionName: '',
        name: 'label.title.head',
      },
      enabled: true,
    },
    {
      id: 'back-left-spleniuscapitis',
      data: 'm 52.369695,12.105075 -2.35767,-1.55045 -1.47119,-3.9514301 -0.60741,0.0403 0.27409,1.82447 0.97635,0.33932 0.7613,2.2157201 0.33017,1.06849 0.0895,2.14894 1.16448,0.008 0.10563,-0.70833 0.54716,-0.0606 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.spleniuscapitis',
      },
      enabled: true,
    },
    {
      id: 'back-right-spleniuscapitis',
      data: 'm 53.3,13.6.23768,0.64982 1.38107,-0.004 0.01,-2.38784 0.25971,-0.79061 0.57215,-2.1698001 0.76359,-0.41018 0.25158,-1.78416 -0.62859,0.0193 -1.08488,3.8998101 -2.39725,1.46684 0.2768,1.48507 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.spleniuscapitis',
      },
      enabled: true,
    },
    {
      id: 'back-left-trapezius',
      data: 'm  49.625175,14.629325 0.063,-2.62462 -0.71441,1.15181 -4.37994,1.49796 4.97857,8.36746 1.83043,5.08188 -0.21949,-13.55362 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.trapezius',
      },
      enabled: true,
    },
    {
      id: 'back-right-trapezius',
      data: 'm 55.439085,14.728535 -0.063,-2.62463 0.71441,1.15181 4.37994,1.49796 -4.97857,8.36746 -1.83043,5.08189 0.21949,-13.55362 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.trapezius',
      },
      enabled: true,
    },
    {
      id: 'back-left-latissimusdorsi',
      data: 'm 42.200945,16.586495 -1.57473,1.56517 -0.81404,2.06905 -0.38603,2.52859 1.83679,-1.23927 2.76223,-1.15538 1.84691,3.4342 1.13679,5.49715 0.0767,5.8593 4.07066,1.10938 -0.10355,-7.94098 -1.94107,-4.90022 -5.04395,-8.19334 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Left',
        positionName: 'label.title.left',
        name: 'label.title.latissimusdorsi',
      },
      enabled: true,
    },
    {
      id: 'back-right-latissimusdorsi',
      data: 'm 62.863315,16.685695 1.57473,1.56518 0.81404,2.06904 0.0384,2.52859 -1.48921,-1.23926 -2.76223,-1.15539 -1.84691,3.4342 -1.13679,5.49715 -0.0767,5.8593 -4.07066,1.10938 0.10355,-7.94098 1.94107,-4.90021 5.04395,-8.19335 z',
      position: {
        type: 'Back',
        typeName: 'label.title.back',
        position: 'Right',
        positionName: 'label.title.right',
        name: 'label.title.latissimusdorsi',
      },
      enabled: true,
    },
  ];
  constructor() {}
}
