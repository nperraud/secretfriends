const SecretSanta = require('./SecretSanta.js');
const _ = require('lodash');

describe('SecretSanta', () => {
    let santa;

    beforeEach(() => {
        santa = new SecretSanta();
    });

    describe('add', () => {
        test('should add a name to the list', () => {
            santa.add('Alice');
            expect(santa.names).toContain('Alice');
            expect(santa.names.length).toBe(1);
        });

        test('should throw error when adding duplicate name', () => {
            santa.add('Alice');
            expect(() => santa.add('Alice')).toThrow('Cannot redefine Alice');
        });

        test('should return subapi with enforce and blacklist methods', () => {
            const subapi = santa.add('Alice');
            expect(typeof subapi.enforce).toBe('function');
            expect(typeof subapi.blacklist).toBe('function');
        });
    });

    describe('blacklist', () => {
        test('should blacklist a person from being paired with another', () => {
            santa.add('Alice').blacklist('Bob');
            santa.add('Bob');
            santa.add('Charlie');

            const pairings = santa.generate();
            expect(pairings['Alice']).not.toBe('Bob');
        });

        test('should allow multiple blacklist entries', () => {
            santa.add('Alice').blacklist('Bob').blacklist('Charlie');
            santa.add('Bob');
            santa.add('Charlie');
            santa.add('David');

            const pairings = santa.generate();
            expect(pairings['Alice']).not.toBe('Bob');
            expect(pairings['Alice']).not.toBe('Charlie');
            expect(pairings['Alice']).toBe('David');
        });

        test('should not add duplicate blacklist entries', () => {
            santa.add('Alice').blacklist('Bob').blacklist('Bob');
            expect(santa.blacklists['Alice'].length).toBe(1);
        });
    });

    describe('enforce', () => {
        test('should enforce a specific pairing', () => {
            santa.add('Alice').enforce('Bob');
            santa.add('Bob');
            santa.add('Charlie');

            const pairings = santa.generate();
            expect(pairings['Alice']).toBe('Bob');
        });

        test('should allow enforce to be called before target is added', () => {
            santa.add('Alice').enforce('Bob');
            // Bob is not added yet, but enforce doesn't validate immediately
            expect(() => {
                santa.add('Bob');
            }).not.toThrow();
            // Now that Bob is added, generate should work
            expect(() => santa.generate()).not.toThrow();
        });

        test('should throw error during generate if enforced person not declared', () => {
            santa.add('Alice').enforce('Bob');
            // Bob is never added
            expect(() => santa.generate()).toThrow(/hasn't been declared as a possible pairing/);
        });

        test('should throw error if multiple people enforce same pairing', () => {
            santa.add('Alice').enforce('Bob');
            santa.add('Charlie').enforce('Bob');
            santa.add('Bob');
            santa.add('David'); // Add extra person to make pairing possible

            // When two people enforce the same target, the algorithm will fail
            // because after pairing Alice with Bob, Charlie has no valid candidates
            expect(() => santa.generate()).toThrow(/We haven't been able to find a match/);
        });
    });

    describe('generate', () => {
        test('should generate valid pairings for two people', () => {
            santa.add('Alice');
            santa.add('Bob');

            const pairings = santa.generate();
            expect(pairings['Alice']).toBe('Bob');
            expect(pairings['Bob']).toBe('Alice');
        });

        test('should generate valid pairings for three people', () => {
            santa.add('Alice');
            santa.add('Bob');
            santa.add('Charlie');

            const pairings = santa.generate();
            expect(Object.keys(pairings).length).toBe(3);
            expect(pairings['Alice']).not.toBe('Alice');
            expect(pairings['Bob']).not.toBe('Bob');
            expect(pairings['Charlie']).not.toBe('Charlie');
            
            // Check that all pairings are unique
            const values = Object.values(pairings);
            expect(new Set(values).size).toBe(3);
        });

        test('should generate valid pairings for multiple people', () => {
            const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
            names.forEach(name => santa.add(name));

            const pairings = santa.generate();
            expect(Object.keys(pairings).length).toBe(6);
            
            // Each person should be paired with someone else
            Object.keys(pairings).forEach(name => {
                expect(pairings[name]).not.toBe(name);
            });

            // All pairings should be unique
            const values = Object.values(pairings);
            expect(new Set(values).size).toBe(6);
        });

        test('should respect blacklist rules', () => {
            santa.add('Alice').blacklist('Bob');
            santa.add('Bob');
            santa.add('Charlie');
            santa.add('David');

            const pairings = santa.generate();
            expect(pairings['Alice']).not.toBe('Bob');
            expect(['Charlie', 'David']).toContain(pairings['Alice']);
        });

        test('should respect enforced pairings', () => {
            santa.add('Alice').enforce('Bob');
            santa.add('Bob');
            santa.add('Charlie');
            santa.add('David');

            const pairings = santa.generate();
            expect(pairings['Alice']).toBe('Bob');
        });

        test('should handle complex rules with blacklists and enforced pairings', () => {
            santa.add('Alice').blacklist('Bob');
            santa.add('Bob').blacklist('Alice');
            santa.add('Charlie').enforce('David');
            santa.add('David');
            santa.add('Eve');

            const pairings = santa.generate();
            expect(pairings['Alice']).not.toBe('Bob');
            expect(pairings['Bob']).not.toBe('Alice');
            expect(pairings['Charlie']).toBe('David');
        });

        test('should throw error when no valid pairing exists', () => {
            santa.add('Alice').blacklist('Bob').blacklist('Charlie');
            santa.add('Bob').blacklist('Alice').blacklist('Charlie');
            santa.add('Charlie').blacklist('Alice').blacklist('Bob');
            // All three people have blacklisted each other, impossible to pair

            expect(() => santa.generate()).toThrow(/We haven't been able to find a match/);
        });

        test('should generate different pairings on multiple runs', () => {
            const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry'];
            names.forEach(name => santa.add(name));

            const pairings1 = santa.generate();
            
            // Create new instance for second run
            const santa2 = new SecretSanta();
            names.forEach(name => santa2.add(name));
            const pairings2 = santa2.generate();

            // With enough people, it's very likely to get different pairings
            // We'll check that at least one pairing is different
            const allSame = names.every(name => pairings1[name] === pairings2[name]);
            // This test might occasionally fail due to randomness, but it's very unlikely with 8 people
            expect(allSame).toBe(false);
        });

        test('should handle single person (edge case)', () => {
            santa.add('Alice');
            expect(() => santa.generate()).toThrow(); // Should fail - can't pair with yourself
        });

        test('should work with example from README - Maechler family', () => {
            santa.add('Esther').blacklist('Roman');
            santa.add('Roman').blacklist('Esther');
            santa.add('Helen').blacklist('Sandro');
            santa.add('Sandro').blacklist('Helen');
            santa.add('Milena').blacklist('Nathanaël');
            santa.add('Nathanaël').blacklist('Milena');

            const pairings = santa.generate();
            
            // Verify all pairings exist
            expect(Object.keys(pairings).length).toBe(6);
            
            // Verify blacklist rules are respected
            expect(pairings['Esther']).not.toBe('Roman');
            expect(pairings['Roman']).not.toBe('Esther');
            expect(pairings['Helen']).not.toBe('Sandro');
            expect(pairings['Sandro']).not.toBe('Helen');
            expect(pairings['Milena']).not.toBe('Nathanaël');
            expect(pairings['Nathanaël']).not.toBe('Milena');
        });

        test('should work with enforced pairings in example', () => {
            santa.add('Tounet').blacklist('Edwige');
            santa.add('Edwige').blacklist('Tounet');
            santa.add('Jérémie').blacklist('Isabelle');
            santa.add('Isabelle').blacklist('Jérémie');
            santa.add('Nathanaël').blacklist('Milena');
            santa.add('Milena').blacklist('Nathanaël');
            santa.add('Camille').blacklist('Raphaël');
            santa.add('Raphaël').blacklist('Camille');
            santa.add('Clotilde').blacklist('David');
            santa.add('David').blacklist('Clotilde');
            santa.add('Emeline').blacklist('Cyril');
            santa.add('Cyril').blacklist('Emeline');
            santa.add('Théo');
            santa.add('Tom').blacklist('Virginie');
            santa.add('Virginie').blacklist('Tom');

            const pairings = santa.generate();
            
            // Verify all pairings exist
            expect(Object.keys(pairings).length).toBe(15);
            
            // Verify blacklist rules are respected
            expect(pairings['Tounet']).not.toBe('Edwige');
            expect(pairings['Edwige']).not.toBe('Tounet');
            expect(pairings['Tom']).not.toBe('Virginie');
            expect(pairings['Virginie']).not.toBe('Tom');
        });
    });

    describe('edge cases', () => {
        test('should handle names with special characters', () => {
            santa.add('Alice (the elf)');
            santa.add('Bob');
            santa.add('Charlie');

            const pairings = santa.generate();
            expect(Object.keys(pairings).length).toBe(3);
            expect(pairings['Alice (the elf)']).toBeDefined();
        });

        test('should handle empty blacklist gracefully', () => {
            santa.add('Alice');
            santa.add('Bob');
            santa.add('Charlie');

            // No blacklists set
            const pairings = santa.generate();
            expect(Object.keys(pairings).length).toBe(3);
        });

        test('should handle case where one person has many blacklists but still can pair', () => {
            santa.add('Alice').blacklist('Bob').blacklist('Charlie').blacklist('David');
            santa.add('Bob');
            santa.add('Charlie');
            santa.add('David');
            santa.add('Eve'); // Alice can pair with Eve

            const pairings = santa.generate();
            expect(pairings['Alice']).toBe('Eve');
        });
    });
});

