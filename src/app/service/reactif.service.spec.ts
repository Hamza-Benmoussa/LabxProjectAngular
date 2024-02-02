import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactifService } from './reactif.service';
import { Reactif } from '../entity/Reactif';

const baseUrl = "http://localhost:8080/api/reactifs";

describe('ReactifService', () => {
  let service: ReactifService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReactifService]
    });
    service = TestBed.inject(ReactifService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a reactif', () => {
    const reactif: Reactif = {
      id: 1,
      nom: 'Reactif 1',
      description: 'Description for Reactif 1',
      quantiteStock: 10,
      dateExpiration: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    const mockResponseData = { id: 123, message: 'Reactif created successfully' };

    service.saveReactif(reactif).subscribe(response => {
      expect(response).toEqual(mockResponseData);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponseData);
  });

  it('should get reactifs', () => {
    const mockReactifs: Reactif[] = [
      {
        id: 1,
        nom: 'Reactif 1',
        description: 'Description for Reactif 1',
        quantiteStock: 10,
        dateExpiration: '2022-12-31',
        fournisseurNom: 'Supplier ABC'
      },
      // Add more mock reactifs as needed
    ];

    service.getReactifs().subscribe(reactifs => {
      expect(reactifs).toEqual(mockReactifs);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockReactifs);
  });

  it('should get a reactif by id', () => {
    const mockReactif: Reactif = {
      id: 1,
      nom: 'Reactif 1',
      description: 'Description for Reactif 1',
      quantiteStock: 10,
      dateExpiration: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.getReactifById(mockReactif.id).subscribe(reactif => {
      expect(reactif).toEqual(mockReactif);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockReactif.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockReactif);
  });

  it('should update a reactif', () => {
    const mockReactif: Reactif = {
      id: 1,
      nom: 'Reactif 1',
      description: 'Description for Reactif 1',
      quantiteStock: 10,
      dateExpiration: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.updateReactif(mockReactif.id, mockReactif).subscribe(updatedReactif => {
      expect(updatedReactif).toEqual(mockReactif);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockReactif.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockReactif);
  });

  it('should delete a reactif', () => {
    const mockReactif: Reactif = {
      id: 1,
      nom: 'Reactif 1',
      description: 'Description for Reactif 1',
      quantiteStock: 10,
      dateExpiration: '2022-12-31',
      fournisseurNom: 'Supplier ABC'
    };

    service.deleteReactif(mockReactif.id).subscribe(deletedReactif => {
      expect(deletedReactif).toEqual(mockReactif);
      // Add additional expectations based on your use case
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockReactif.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockReactif);
  });
});
