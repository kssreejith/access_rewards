import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
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
  mapProps: any = {
    center: 'Bengaluru, India',
    zoom: 5
  };
  mapInfo: any = {};
  constructor(
    public brandService: BrandService
  ) {

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
          brand_location: 'C.S. Creamery Pvt. Ltd, Ground Floor, Plot No.120, Export promotion & Industrial Park (EPIP),Ergotek seating system building,Whitefield Bangalore',
          lat: '12.976789', long: '77.725735'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore',
          brand_centre: 'Orion Mall,Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru, Karnataka',
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


    console.log("this.mapProps", this.mapProps)
  }

  onBrandChange(val) {
    console.log('onBrandChange', val);
    console.log('brandIndex', this.brandIndex);
    this.cityList = {};

    this.brandIndex = val;

    this.cityList = this.bandList[val]['brand_city'];
  }

  onCityChange(val) {
    console.log('onCityChange', val);
    console.log('cityIndex', this.cityIndex);
    this.cityIndex = val;


  }

  getRandomMarkers() {

    console.log('selectedBrand.cityIndex', this.bandList[this.brandIndex].brand_city[this.cityIndex].lat);
    console.log('selectedBrand.cityIndex', this.bandList[this.brandIndex].brand_city[this.cityIndex].long);


    const positions = {
      pos: [],
      addr: null
    };
    positions.addr = this.bandList[this.brandIndex].brand_city[this.cityIndex].brand_location;
    positions.pos = [];

    positions.pos.push([this.bandList[this.brandIndex].brand_city[this.cityIndex].lat,
    this.bandList[this.brandIndex].brand_city[this.cityIndex].long]);

    return positions;
  }

  getBrandData() {

    let responseData: any;
    this.brandService.getBrandData('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/fetchBrands/1', '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brands = responseData.data;

      });
  }
}
