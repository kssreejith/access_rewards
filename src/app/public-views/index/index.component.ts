import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppSettings } from 'app/app.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  public brands: any;
  public positions = {
    pos: [],
    addr: null
  };

  public config = AppSettings.currentCountry;

  public cityIndex = 0;
  public brandIndex = 0;
  public bandList: any;
  public cityList: any;
  public marker = {
    display: true,
    lat: null,
    lng: null,
    addr: null
  };
  public grayStyles = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'saturation': 36
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 40
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        },
        {
          'weight': 1.2
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 21
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 29
        },
        {
          'weight': 0.2
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 18
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 19
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'lightness': '-86'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'lightness': '-59'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'lightness': '-71'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        }
      ]
    }
  ];
  public mapIcons: number;
  mapProps: any = {
    center: 'Bengaluru, India',
    zoom: 5
  };
  mapInfo: any = {};
  constructor(
    public brandService: BrandService,
    public router: Router
  ) {

    if (AppSettings.currentCountry === 'india') {
      document.getElementById('myVideo').style.display = 'none';

      this.getBrandData();
      this.bandList = [
        {
          brand_name: 'Bloomsburys',
          brand_city: [{
            city: 'Bangalore',
            brand_centre: 'Ergotek seating system building, Whitefield, Bangalore',
            brand_location: 'Bloomsburys The Food Company Pvt Ltd,Ground Floor, Plot No.120,' +
              'Export promotion & Industrial Park(EPIP), Ergotek seating system building, Whitefield, Bangalore 560066',
            lat: '12.976789', long: '77.725735'
          },
          {
            city: 'kochi',
            brand_centre: 'Edappally, Cochin',
            brand_location: 'Lulu International Shopping Mall Pvt Ltd,' +
              '2nd Floor, 34/967-968, NH 47, Edappally, Cochin - 682024' +
              'Phone: 0484 - 4059034',
            lat: '10.0270255', long: '76.3080941'
          }]
        },
        {
          brand_name: 'Galito\'s',
          brand_city: [{
            city: 'Bangalore',
            brand_centre: 'EPIP Zone, Whitefield , Bangalore',
            brand_location: 'Galitos Restaurants Pvt.Ltd, No. 120, Road, No 2 Vijaynagar,' +
              'EPIP Zone, Whitefield , Bangalore – 560066,TIN 29511272323',
            lat: '12.9768739', long: '77.7255377'
          },
          {
            city: 'kochi',
            brand_centre: 'M K K  Nair Road, Vazhakkala,kochi',
            brand_location: 'M/s. Galitos Restaurants Pvt.Ltd,7th Floor,Y Tower,' +
              ' M K K  Nair Road, Vazhakkala,kochi,Pin: 682030',
            lat: '10.026941', long: '76.30765'
          }]
        },
        {
          brand_name: 'Tablez & Toyz',
          brand_city: [{
            city: 'Bangalore',
            brand_centre: 'Devasandra Industrial Estate, Krishnarajapura, Bengaluru',
            brand_location: 'Phonix Market City, No.S-61, Second Floor, Whitefield Main Road,' +
              ' Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
            lat: '12.9969211', long: '77.6967062'
          },
          {
            city: 'Bangalore',
            brand_centre: 'SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT, Bengaluru',
            brand_location: 'Tablez & Toyz Pvt ltd,' +
              'Unit No-R-04 & 05, Floor-Third FloorNO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT, Bengaluru, Karnataka',
            lat: '12.902078', long: '77.600624'
          }]
        },
        {
          brand_name: 'Cold Stone Creamery',
          brand_city: [{
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore',
            brand_centre: 'Ergotek seating system building,Whitefield Bangalore',
            // tslint:disable-next-line:max-line-length
            brand_location: 'C.S. Creamery Pvt. Ltd, Ground Floor, Plot No.120, Export promotion & Industrial Park (EPIP),Ergotek seating system building,Whitefield Bangalore',
            lat: '12.976789', long: '77.725735'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore',
            brand_centre: 'Orion Mall,Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru, Karnataka',
            // tslint:disable-next-line:max-line-length
            brand_location: 'C S Creamery Pvt.Ltd, Upper Ground Floor,Orion Mall,Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru, Karnataka 560055',
            lat: '13.0030624', long: '77.5642928'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore',
            brand_centre: 'Binnamangala Bhawan,1st Stage, CMH Road, Indiranagar, Bangalore',
            brand_location: 'Kenny Plaza ,737, 2nd Cross Road, Binnamangala Bhawan,1st Stage, CMH Road, Indiranagar, Bangalore - 560038.',
            lat: '12.9782859', long: '77.6387567'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Chennai',
            brand_centre: 'velachery Road,chennai',
            brand_location: 'Phoenix Market city, groundfloor,old door no 66, New door no-142,velachery Road,chennai-600042',
            lat: '12.951785', long: '80.211230'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore',
            brand_centre: 'Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
            brand_location: 'Phonix Market City, Second Floor, Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
            lat: '12.9969211', long: '77.6967062'
          },
          {
            city: 'Bangalore',
            brand_centre: 'HSR Layout,Bangalore',
            brand_location: 'Ground & Mezzanine floor(Shop No-3)#102, 17th cross,6th sector, HSR Layout,Bangalore -560102',
            lat: '12.908136', long: '77.647608'
          },
          {
            city: 'Delhi',
            brand_centre: 'Don Bosco School main entrance,Alaknanda, New Delhi',
            brand_location: 'DDA Commercial Shopping Complex,Opposite Don Bosco School main entrance,Alaknanda, New Delhi',
            lat: '28.528296', long: '77.246863'
          },
          {
            city: 'Delhi',
            brand_centre: 'Nelson Mandela Marg,Vasant Kunj, New Delhi',
            brand_location: 'Vasantkunj,  Delhi- S-223, Second Floor,Plot No. 2Nelson Mandela Marg,Vasant Kunj, New Delhi.',
            lat: '28.535193', long: '77.152680'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Haryana',
            brand_centre: 'Ambience Island, NH-8 Gurugram District,Haryana',
            brand_location: 'Ambience Mall, Gurgaon,Ambience Mall Complex,Ambience Island, NH-8 Gurugram District,Haryana -122002.',
            lat: '28.502596', long: '77.100075'
          },
          {
            city: 'Chennai',
            brand_centre: 'Velachery Road, Chennai',
            brand_location: 'PMC Chennai, GroundFloor  Old Door.No.66, New Door No.142, Velachery Road, Chennai-600042',
            lat: '12.951785', long: '80.211230'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Kochi',
            brand_centre: 'NH 47, Edappally, Cochin - 682024',
            brand_location: 'Lulu International Shopping Mall Pvt Ltd, Ground floor, NH 47, Edappally, Cochin - 682024, Phone: 0484 - 4059034',
            lat: '10.029150', long: '76.307833'
          }]
        },
        {
          brand_name: 'SPRINGFIELD', brand_city: [
            {
              // tslint:disable-next-line:max-line-length
              city: 'Bangalore',
              brand_centre: 'SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT,Bengaluru, Karnataka',
              brand_location: 'SPRINGFIELD,UNIT NO-FF-16-FIRST FLOOR,NO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT,Bengaluru, Karnataka',
              lat: '12.901100', long: '77.601067'
            },
            {
              // tslint:disable-next-line:max-line-length
              city: 'Bangalore',
              brand_centre: 'Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
              brand_location: 'Phonix Market City,Shop No-LG-32 & 32A (Spring Field), Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
              lat: '12.996913', long: '77.698704'
            },
            {
              // tslint:disable-next-line:max-line-length
              city: 'Mumbai',
              brand_centre: 'senapati bapat marg, lower parel, mumbai-400013',
              brand_location: 'SPRINGFIELD,Unit no:f-2 & f-3, 1st floor, skyzone mall, high street phoenix, 462,senapati bapat marg, lower parel, mumbai-400013',
              lat: '18.998137', long: '72.827349'
            }
          ]
        },
        {
          brand_name: 'WOMEN\'SECRET', brand_city: [
            {
              // tslint:disable-next-line:max-line-length
              city: 'Bangalore',
              brand_centre: 'SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT,Bengaluru, Karnataka',
              brand_location: 'WOMEN \'SECRET,UNIT NO-SF-13 & 14-2ND FLOOR,NO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT,Bengaluru, Karnataka',
              lat: '12.901100', long: '77.601067'
            },
            {
              // tslint:disable-next-line:max-line-length
              city: 'Bangalore',
              brand_centre: 'Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
              brand_location: 'Phonix Market City,Shop No-LG-28, (Women’Secret), Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048',
              lat: '12.996913', long: '77.698704'
            },
            {
              // tslint:disable-next-line:max-line-length
              city: 'Mumbai',
              brand_centre: 'SENAPATI BAPAT MARG, LOWER PAREL, MUMBAI-400013',
              brand_location: 'WOMEN \'SECRETUNIT NO: F-24,1ST FLOOR, SKYZONE MALL, HIGH STREET PHOENIX,462, SENAPATI BAPAT MARG, LOWER PAREL, MUMBAI-400013',
              lat: '18.998137', long: '72.827349'
            }
          ]
        }
      ];
    } else {
      this.getBrandDataUae();
      document.getElementById('myVideo').style.display = 'block';
      this.bandList = [{
        brand_name: 'Bloomsburys',
        brand_city: [{
          city: 'Alwahda Mall',
          brand_centre: 'Alwahda Mall',
          brand_location: 'Alwahda Mall,Ground Floor, Near Starbucks,Defense Road - Abu Dhabi,Contact No:02 6438610,bloomsburys@ae.tablez.com,Saturday to Wednesday:7:00AM to 10:00PM,Thursday & Friday:7:00AM to 10:00PM',
          lat: '24.4677663', long: '54.3754372'
        },
        {
          city: 'Rak Mall',
          brand_centre: 'Rak Mall',
          brand_location: 'Near Food Court, 2nd Floor, RAK Mall, Khuzam Road, Al Qurm, Ras al-Khaimah,Contact No:07 2264019,bloomsburys.rak@ae.tablez.com,Saturday to Wednesday:7:00AM to 10:00PM,Thursday & Friday:7:00AM to 10:00PM',
          lat: '25.771963', long: '55.9592854'
        },
        {
          city: 'Y Tower',
          brand_centre: 'Y Tower',
          brand_location: 'Y Tower, Near Al Mamoura Building, Muroor Street,Contact No:02 4454156,bloomsburys.ytower@ae.tablez.com,Saturday to Wednesday:7:00AM to 10:00PM,Thursday & Friday:7:00AM to 10:00PM',
          lat: '24.4677663', long: '54.3754372'
        },

        {
          city: 'Mushrif Mall',
          brand_centre: 'Mushrif Mall',
          brand_location: 'Mushrif Mall, Level 2 Sheikh Rashid Bin Saeed St,Contact No:02 4914537,bloomsburys.mushrif@ae.tablez.com,Saturday to Wednesday:7:00AM to 10:00PM,Thursday & Friday:7:00AM to 10:00PM',
          lat: '24.4342544', long: '54.4105131'
        }]
      },
      {
        brand_name: 'Galito\'s',
        brand_city: [{
          city: 'Al Wahda Mall',
          brand_centre: 'Al Wahda Mall',
          brand_location: '2nd Floor, Al Wahda Mall Extension - Abu Dhabi,Contact No:02 6438221,galitosaw@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.470394', long: '54.374637'
        },
        {
          city: 'Marina Mall',
          brand_centre: 'Marina Mall',
          brand_location: 'Level 1, near cinema, Marina Mall - Abu Dhabi ,Contact No:02 6505771,galitosmarina@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.4769074', long: '54.3237311'
        },
        {
          city: 'Dalma Mall',
          brand_centre: 'Dalma Mall',
          brand_location: 'Level 2, Near Cinema, Dalma Mall, Mussafah - Abu Dhabi ,Contact No:02 4478912,galitosdalma@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.3310539', long: '54.5214753'
        },
        {
          city: 'Yas Mall',
          brand_centre: 'Yas Mall',
          brand_location: 'Ground Level, Cascade Dining, Yas Mall, Yas Island,Contact No:02 5651849,galitosyas@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.4860778', long: '54.6081586'
        },
        {
          city: 'Dubai Festival City',
          brand_centre: 'Dubai Festival City',
          brand_location: 'Skywalk Food Court, Dubai Festival City, Dubai,Contact No:04 2882613,galitos.dfc@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '25.2225158', long: '55.3497791'
        },
        {
          city: 'Bay Square',
          brand_centre: 'Bay Square',
          brand_location: 'Ground Level 7, Building 13, Bay Square, Business Bay - Dubai,Contact No:044580559,galitosbaysquare@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '25.185929', long: '55.2788753'
        },
        {
          city: 'Al Naeem Mall',
          brand_centre: 'Al Naeem Mall',
          brand_location: 'Ground Floor, Al Naeem Mall, Ras al-Khaimah,Contact No:07 2263456,galitos.alnaeem@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '25.7918464', long: '55.9662136'
        },
        {
          city: 'Dubai Parks & Resorts',
          brand_centre: 'Dubai Parks & Resorts',
          brand_location: 'Boardwalk, Riverland, Dubai Parks And Resorts,Jebel Ali Village, Dubai,Contact No:048860711,galitos.dpr@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.9195338', long: '55.0070672'
        }]
      },
      {
        brand_name: 'Peppermill',
        brand_city: [{
          city: 'Al Wahda Mall',
          brand_centre: 'Al Wahda Mall',
          brand_location: '2nd Floor, Al Wahda Mall Extension, Hazza Bin Zayed St,Contact No:02 6225586,peppermill.alwahda@ae.tablez.com,Saturday to Wednesday:11:30AM to 11:30PM,Thursday & Friday:11:30AM to 1:00AM',
          lat: '24.4706981', long: '54.3748422'
        },
        {
          city: 'Eastern Mangroves',
          brand_centre: 'Eastern Mangroves',
          brand_location: 'Jannah Hotel,Eastern Mangrove Promenade, Eastern Ring Road,Contact No:02 4413582,peppermill.mangroves@ae.tablez.com,Saturday to Wednesday:11:30AM to 11:30PM,Thursday & Friday:11:30AM to 1:00AM',
          lat: '24.4462209', long: '54.4384861'
        },
        {
          city: 'Bawabat Al Sharq Mall',
          brand_centre: 'Bawabat Al Sharq Mall',
          brand_location: 'Ground Level, Bawabat Al Sharq Mall, Baniyas - United Arab Emirates,Contact No:02 5859581,peppermill.bas@ae.tablez.com,Saturday to Wednesday:11:30AM to 11:30PM,Thursday & Friday:11:30AM to 1:00AM',
          lat: '24.311144', long: '54.6203681'
        },
        {
          city: 'Al Naeem Mall',
          brand_centre: 'Al Naeem Mall',
          brand_location: 'Ground Floor, Al Naeem Mall - North Ras Al Khaimah - United Arab Emirates,Contact No:07 2267228,peppermill.alnaeem@ae.tablez.com,Saturday to Wednesday:11:30AM to 11:30PM,Thursday & Friday:11:30AM to 1:00AM',
          lat: '25.0506469', long: '54.61016'
        },
        {
          city: 'Dubai Festival City',
          brand_centre: 'Dubai Festival City',
          brand_location: 'Level 1, Water Front, Dubai Festival City Mall، Dubai Festival City - Dubai,Contact No:04 2881587,peppermill.dfc@ae.tablez.com,Saturday to Wednesday:11:30AM to 11:30PM,Thursday & Friday:11:30AM to 1:00AM',
          lat: '25.2211202', long: '55.3513616'
        }]
      },
      {
        brand_name: 'Famous Dave\'s',
        brand_city: [{
          city: 'Al Wahda Mall',
          brand_centre: 'Al Wahda Mall',
          brand_location: 'Level 2, Al Wahda Mall, Al Wahda, Abu Dhabi,Contact No:02 5846899,famousdaves.awm@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM ,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.4699952', long: '54.3731851'

        },
        {
          city: 'Abudhabi Mall',
          brand_centre: 'Abudhabi Mall',
          brand_location: 'Near The One, Level 3, Abu Dhabi Mall, Tourist Club Area (Al Zahiyah),Contact No:02 6587863,famousdaves.adm@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM ,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.4953097', long: '54.382809'
        },
        {
          city: 'Dubai Parks & Resorts',
          brand_centre: 'Dubai Parks & Resorts',
          brand_location: 'Unit Number 9B-1, Boardwalk, Riverland, Dubai Parks & Resorts, Dubai,Contact No:04 8861012,famousdaves.dpr@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:00PM ,Thursday & Friday:11:00AM to 12:00AM',
          lat: '24.9200333', long: '55.006114'
        }]
      },
      {
        brand_name: 'Sugar Factory',
        brand_city: [{
          city: 'Dubai Festival City',
          brand_centre: 'Dubai Festival City',
          brand_location: 'Festival City Mall, SHOP NO. MW 18 - Dubai,Contact No:04 2843456,sugarfactory.dfcmall@ae.tablez.com,Saturday to Wednesday:10:00AM to 11:00PM,Thursday & Friday:10:00AM to 12:00AM',
          lat: '25.2222161', long: '55.3494879'

        },
        {
          city: 'Lamer',
          brand_centre: 'Lamer',
          brand_location: 'La Mer South, Street 2A, Jumeriah Road, Jumeirah 1,Contact No:04 3855312,sugarfactory.lamer@ae.tablez.com,Saturday to Wednesday:10:00AM to 11:00PM,Thursday & Friday:10:00AM to 12:00AM',
          lat: '25.228319', long: '55.2576812'
        }]
      },
      {
        brand_name: 'Genghi\'s Grill',
        brand_city: [{
          city: 'Al Wahda Mall',
          brand_centre: 'Al Wahda Mall',
          brand_location: 'Level 2, Al Wahda Mall Extension, Abu Dhabi,Contact No:02 5824449,genghisgrill.awm@ae.tablez.com,Saturday to Wednesday:11:00AM to 11:15PM,Thursday & Friday:11:00AM to 11:45PM',
          lat: '24.4706634', long: '54.3726639'

        }]
      },
      {
        brand_name: 'Pancake House',
        brand_city: [{
          city: 'Burjuman',
          brand_centre: 'Burjuman',
          brand_location: 'GF 005, Burjuman Mall, Sheikh Khalifah Bin Zayed Road, Bur Dubai - Dubai ,Contact No:04 3273584,pancakehouse.burjuman@ae.tablez.com,Saturday to Wednesday:9:00AM to 11:00PM,Thursday & Friday:7:00AM to 11:00PM',
          lat: '25.2532617', long: '55.3007624'
        }]
      }

      ]
    }


    this.positions = this.getRandomMarkers();
    this.onBrandChange(0);


  }
  clicked({ target: marker }, position) {

    this.marker.addr = position.addr;

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  showZoom() {
    this.mapProps.center = this.bandList[this.brandIndex].brand_city[this.cityIndex].brand_centre;
    this.mapProps.zoom = 11;
    this.positions = this.getRandomMarkers();


    console.log('this.mapProps', this.mapProps)
  }

  onBrandChange(val) {
    this.cityList = {};

    this.brandIndex = val;

    this.cityList = this.bandList[val]['brand_city'];
  }

  onCityChange(val) {
    this.cityIndex = val;


  }

  getRandomMarkers() {
    const positions = {
      pos: [],
      addr: null,
      mapLocatorIcon: {}
    };
    positions.addr = this.bandList[this.brandIndex].brand_city[this.cityIndex].brand_location;
    positions.pos = [];
    if (AppSettings.currentCountry === 'india') {

      this.mapIcons = +this.brandIndex + 1;

    } else {
      this.mapIcons = +this.brandIndex + 1;

    }


    positions.pos.push([this.bandList[this.brandIndex].brand_city[this.cityIndex].lat,
    this.bandList[this.brandIndex].brand_city[this.cityIndex].long]);

    return positions;
  }

  getBrandData() {

    let responseData: any;
    this.brandService.getBrandData(
      AppSettings.API_ENDPOINT + AppSettings.fetchBrands, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brands = responseData.data;

      });
  }

  getBrandDataUae() {

    let responseData: any;
    this.brandService.getBrandData(
      AppSettings.API_ENDPOINT + AppSettings.fetchBrandsUae, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brands = responseData.data;

      });
  }
  getBrandDetails(id?: number) {
    this.router.navigate(['/ourbrand', id], { skipLocationChange: true });

  }
}
