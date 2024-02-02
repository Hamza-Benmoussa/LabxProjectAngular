import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialService } from './material.service';
import { MaterialEchan } from '../entity/MaterialEchan';

const baseUrl = "http://localhost:8080/api/materials";

describe('MaterialService', () => {
  let service: MaterialService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MaterialService]
    });
    service = TestBed.inject(MaterialService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a material', () => {
    const material: MaterialEchan = {
      id: 1,
      nomechan: 'Material 1',
      quantiteStockEhcna: 10,
      dateExpirationEchan: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    const mockResponseData = { id: 123, message: 'Material created successfully' };

    service.saveMaterial(material).subscribe(response => {
      expect(response).toEqual(mockResponseData);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponseData);
  });

  it('should get materials', () => {
    const mockMaterials: MaterialEchan[] = [
      {
        id: 1,
        nomechan: 'Material 1',
        quantiteStockEhcna: 10,
        dateExpirationEchan: '2022-12-31',
        fournisseurNom: 'Supplier ABC'
      },
      // Add more mock materials as needed
    ];

    service.getMaterials().subscribe(materials => {
      expect(materials).toEqual(mockMaterials);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockMaterials);
  });

  it('should get a material by id', () => {
    const mockMaterial: MaterialEchan = {
      id: 1,
      nomechan: 'Material 1',
      quantiteStockEhcna: 10,
      dateExpirationEchan: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.getMaterialById(mockMaterial.id).subscribe(material => {
      expect(material).toEqual(mockMaterial);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockMaterial.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMaterial);
  });

  it('should update a material', () => {
    const mockMaterial: MaterialEchan = {
      id: 1,
      nomechan: 'Material 1',
      quantiteStockEhcna: 10,
      dateExpirationEchan: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.updateMaterial(mockMaterial.id, mockMaterial).subscribe(updatedMaterial => {
      expect(updatedMaterial).toEqual(mockMaterial);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockMaterial.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockMaterial);
  });

  it('should delete a material', () => {
    const mockMaterial: MaterialEchan = {
      id: 1,
      nomechan: 'Material 1',
      quantiteStockEhcna: 10,
      dateExpirationEchan: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.deleteMaterial(mockMaterial.id).subscribe(deletedMaterial => {
      expect(deletedMaterial).toEqual(mockMaterial);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockMaterial.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockMaterial);
  });
});
