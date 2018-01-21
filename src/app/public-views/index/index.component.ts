import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  public brands: any;
  private selectedBrand: {
    name: string,
    location: string,

  }
  public bandList: any;
  constructor(
    public brandService: BrandService
  ) {

    this.getBrandData();
    this.bandList = [
      {
        brand_name: 'Bloomsburys',
        brand_city: [{
          city: 'Bangalore',
          brand_location: 'Bloomsburys The Food Company Pvt Ltd,Ground Floor, Plot No.120,' +
            'Export promotion & Industrial Park(EPIP), Ergotek seating system building, Whitefield, Bangalore 560066'
        },
        {
          city: 'kochi', brand_location: 'Lulu International Shopping Mall Pvt Ltd,' +
            '2nd Floor, 34/967-968, NH 47, Edappally, Cochin - 682024' +
            'Phone: 0484 - 4059034'
        }]
      },
      {
        brand_name: 'Galito\'s',
        brand_city: [{
          city: 'Bangalore', brand_location: 'Galitos Restaurants Pvt.Ltd, No. 120, Road, No 2 Vijaynagar,' +
            'EPIP Zone, Whitefield , Bangalore – 560066,TIN 29511272323'
        },
        {
          city: 'kochi', brand_location: 'M/s. Galitos Restaurants Pvt.Ltd,7th Floor,Y Tower,' +
            ' M K K  Nair Road, Vazhakkala,kochi,Pin: 682030'
        }]
      },
      {
        brand_name: 'Tablez & Toyz',
        brand_city: [{
          city: 'Bangalore', brand_location: 'Phonix Market City, No.S-61, Second Floor, Whitefield Main Road,' +
            ' Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048'
        },
        {
          city: 'Bangalore', brand_location: 'Tablez & Toyz Pvt ltd,' +
            'Unit No-R-04 & 05, Floor-Third FloorNO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT'
        }]
      },
      {
        brand_name: 'Cold Stone Creamery',
        brand_city: [{
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'C.S. Creamery Pvt. Ltd, Ground Floor, Plot No.120, Export promotion & Industrial Park (EPIP),Ergotek seating system building,Whitefield Bangalore -560066,TIN   29181342781'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'C S Creamery Pvt.Ltd, Upper Ground Floor,Orion Mall,Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru, Karnataka 560055'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'Kenny Plaza ,737, 2nd Cross Road, Binnamangala Bhawan,1st Stage, CMH Road, Indiranagar, Bangalore - 560038.'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'Phoenix Market city, groundfloor,old door no 66, New door no-142,velachery Road,chennai-600042'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'Phonix Market City, Second Floor, Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048'
        },
        {
          city: 'Bangalore', brand_location: 'Ground & Mezzanine floor(Shop No-3)#102, 17th cross,6th sector, HSR Layout,Bangalore -560102'
        },
        {
          city: 'Delhi', brand_location: 'DDA Commercial Shopping Complex,Opposite Don Bosco School main entrance,Alaknanda, New Delhi'
        },
        {
          city: 'Delhi', brand_location: 'Vasantkunj,  Delhi- S-223, Second Floor,Plot No. 2Nelson Mandela Marg,Vasant Kunj, New Delhi.'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'Ambience Mall, Gurgaon,Ambience Mall Complex,Ambience Island, NH-8 Gurugram District,Haryana -122002.'
        },
        {
          city: 'Bangalore', brand_location: 'PMC Chennai, GroundFloor  Old Door.No.66, New Door No.142, Velachery Road, Chennai-600042'
        },
        {
          // tslint:disable-next-line:max-line-length
          city: 'Bangalore', brand_location: 'Lulu International Shopping Mall Pvt Ltd, Ground floor, NH 47, Edappally, Cochin - 682024, Phone: 0484 - 4059034'
        }]
      },
      {
        brand_name: 'SPRINGFIELD', brand_city: [
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'SPRINGFIELD,UNIT NO-FF-16-FIRST FLOOR,NO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT.'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'Phonix Market City,Shop No-LG-32 & 32A (Spring Field), Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'SPRINGFIELD,Unit no:f-2 & f-3, 1st floor, skyzone mall, high street phoenix, 462,senapati bapat marg, lower parel, mumbai-400013'
          }
        ]
      },
      {
        brand_name: 'WOMEN\'SECRET', brand_city: [
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'WOMEN \'SECRET,UNIT NO-SF-13 & 14-2ND FLOOR,NO 172/1, SRINIVAS INDUSTRIAL ESTATE,BILEKAHALLI,BANNERGHATT'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'Phonix Market City,Shop No-LG-28, (Women’Secret), Whitefield Main Road, Mahadevpura, Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka 560048'
          },
          {
            // tslint:disable-next-line:max-line-length
            city: 'Bangalore', brand_location: 'WOMEN \'SECRETUNIT NO: F-24,1ST FLOOR, SKYZONE MALL, HIGH STREET PHOENIX,462, SENAPATI BAPAT MARG, LOWER PAREL, MUMBAI-400013'
          }
        ]
      }
    ]

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
